import { randomUUID } from 'node:crypto';

import { fail } from '@sveltejs/kit';
import { parse } from 'valibot';

import { CoinInsertSchema, coins, db } from '$lib/server/db';

export const actions = {
  async default({ request, locals: { user, supabase } }) {
    if (!user) return fail(400);

    const data = await request.formData();
    const file = data.get('media');

    console.log(file);

    if (!(file instanceof File) || file.size <= 0) {
      return fail(400, { error: 'Invalid file.' });
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
      return fail(500);
    }

    let values = null;

    try {
      values = parse(CoinInsertSchema, {
        id: randomUUID(),
        address: randomUUID(),
        createdBy: user.id,
        description: data.get('description'),
        media,
        name: data.get('name'),
        symbol: data.get('symbol'),
        telegram: data.get('meta.telegram'),
        twitter: data.get('meta.twitter'),
        website: data.get('meta.website')
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return fail(400);
    }

    try {
      const [result] = await db.insert(coins).values(values).returning();
      return { success: true, message: 'Coin created successfully', result };
    } catch (error) {
      console.error('Error creating coin:', error);
      return { success: false, message: 'Failed to create coin' };
    }
  }
};
