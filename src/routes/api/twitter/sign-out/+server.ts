import { json } from '@sveltejs/kit';

export const POST = async ({ locals: { supabase }, request }) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error);
    return json({ error: 'Failed to sign out' }, { status: 500 });
  }

  return json({ message: 'Successfully signed out' });
};
