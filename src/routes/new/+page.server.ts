import { randomUUID } from 'node:crypto';

import { fail } from '@sveltejs/kit';
import { safeParse } from 'valibot';

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
      description: formData.get('description'),
      name: formData.get('name'),
      symbol: formData.get('symbol'),
      media: '',
      telegram: formData.get('telegram'),
      twitter: formData.get('twitter'),
      website: formData.get('website')
    };

    const file = formData.get('media');

    if (!(file instanceof File) || file.size <= 0) {
      return fail(400, {
        ok: false,
        errors: { media: ['This filetype is not accepted.'] },
        data
      });
    }

    // ! We're mutating `data` to be used `form.data` and input validation.
    data.media = file.name;

    // ! Validate input before uploading images.
    const { issues, output, success } = safeParse(CoinInsertSchema, {
      ...data,
      id: randomUUID(),
      address: randomUUID(),
      createdBy: user.id
    });

    if (!success) {
      return fail(400, {
        ok: false,
        errors: issues.reduce<Record<string, string[]> | undefined>(
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

    // Upload image after validation.
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

      // ! We're mutating our validated `output` to be passed to our DB.
      output.media = publicUrl;
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return fail(500, {
        ok: false,
        error: 'Could not upload image.',
        data
      });
    }

    try {
      const [result] = await db.insert(coins).values(output).returning();
      return { ok: true, data, message: 'Coin created successfully', result };
    } catch (error) {
      console.error('Error creating coin:', error);
      return fail(504, { ok: false, error: 'Failed to create coin.' });
    }
  }
};
