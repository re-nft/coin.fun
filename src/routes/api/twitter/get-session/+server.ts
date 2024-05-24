import { json } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    // console.error('Error retrieving session:', error);
    return json({ error: 'failed to retrieve session' }, { status: 500 });
  }

  return json(session);
};
