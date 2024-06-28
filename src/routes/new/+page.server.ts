import { randomUUID } from 'node:crypto';

import { fail } from '@sveltejs/kit';
import { parse, ValiError } from 'valibot';

import { CoinInsertSchema, coins, db } from '$lib/server/db';

export const actions = {
  async default({ request, locals: { user, supabase } }) {
    if (!user) {
      return fail(400, {
        ok: false,
        error: 'You are not permitted to do this.'
      });
    }

    const formData = await request.formData();

    const data = {
      description: String(formData.get('description') ?? ''),
      name: String(formData.get('name') ?? ''),
      symbol: String(formData.get('symbol') ?? ''),
      telegram: String(formData.get('telegram') ?? ''),
      twitter: String(formData.get('twitter') ?? ''),
      website: String(formData.get('website') ?? '')
    };

    const file = formData.get('media');

    if (!(file instanceof File) || file.size <= 0) {
      return fail(400, {
        ok: false,
        errors: { media: ['This filetype is not accepted.'] },
        data
      });
    }

    let media = '';

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${randomUUID()}.${fileExt}`;
      const { error } = await supabase.storage
        .from('coin-images')
        .upload(fileName, file);

      if (error) {
        throw new Error('Error uploading image.', { cause: error });
      }

      const {
        data: { publicUrl }
      } = supabase.storage.from('coin-images').getPublicUrl(fileName);

      media = publicUrl;
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return fail(500, {
        ok: false,
        error: 'Could not upload image.',
        data
      });
    }

    let values = null;

    try {
      values = parse(CoinInsertSchema, {
        ...data,
        id: randomUUID(),
        address: randomUUID(),
        createdBy: user.id,
        media
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));

      if (error instanceof ValiError) {
        return fail(400, {
          ok: false,
          errors: error.issues.reduce<Record<string, string[]> | undefined>(
            (errors, issue) => {
              const key: string | undefined = issue.path?.reduce(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (key: string | undefined, node: any) =>
                  node?.key ? `${key}${node.key}` : key,
                ''
              );

              if (!key) return errors;
              if (typeof issue?.message !== 'string') return errors;

              if (!errors) errors = {};
              if (!(key in errors)) errors[key] = [];

              errors[key].push(issue.message);

              return errors;
            },
            undefined
          ),
          data
        });
      }

      return fail(500, {
        ok: false,
        error: error instanceof Error ? error.message : String(error)
      });
    }

    try {
      const [result] = await db.insert(coins).values(values).returning();
      return { ok: true, message: 'Coin created successfully', result };
    } catch (error) {
      console.error('Error creating coin:', error);
      return fail(504, { ok: false, error: 'Failed to create coin.' });
    }
  }
};
