import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase }, url }) => {
  const { error: authError } = await supabase.auth.signOut();

  if (authError) {
    console.error('Error signing out:', authError);
    throw error(502, authError.message);
  }

  return redirect(303, url.origin);
};
