import { createCoin } from '$lib/server/db/mock';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    
    const name = data.get('name') as string;
    const ticker = data.get('ticker') as string;
    const description = data.get('description') as string;
    const image = data.get('image') as File;
    const twitter = data.get('twitter') as string;
    const telegram = data.get('telegram') as string;
    const website = data.get('website') as string;

    // For now, we'll use a placeholder image URL
    // TODO: handle file uploads properly
    const imageUrl = 'https://via.placeholder.com/150';

    try {
      createCoin(name, ticker, description, imageUrl, twitter, telegram, website);
      return { success: true, message: 'Coin created successfully' };
    } catch (error) {
      console.error('Error creating coin:', error);
      return { success: false, message: 'Failed to create coin' };
    }
  }
};