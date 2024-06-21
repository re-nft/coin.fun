import { createCoin } from '$lib/server/db/mock';

export const actions = {
  create: async ({ request, locals: { supabase } }) => {
    const data = await request.formData();
    
    const name = data.get('name') as string;
    const ticker = data.get('ticker') as string;
    const description = data.get('description') as string;
    const image = data.get('image') as File;
    const twitter = data.get('twitter') as string;
    const telegram = data.get('telegram') as string;
    const website = data.get('website') as string;

    let imageUrl = '';

    if (image.size > 0) {
      const fileExt = image.name.split('.').pop();
      // TODO: probably needs to be uuid
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('coin-images')
        .upload(fileName, image);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return { success: false, message: 'Failed to upload image' };
      }

      const { data: { publicUrl } } = supabase.storage
        .from('coin-images')
        .getPublicUrl(fileName);

      imageUrl = publicUrl;
    }

    try {
      createCoin(name, ticker, description, imageUrl, twitter, telegram, website);
      return { success: true, message: 'Coin created successfully' };
    } catch (error) {
      console.error('Error creating coin:', error);
      return { success: false, message: 'Failed to create coin' };
    }
  }
};