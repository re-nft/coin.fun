import { error, redirect } from '@sveltejs/kit';

export async function GET({ url, locals: { supabase } }) {
  const { data, error: authError } = await supabase.auth.signInWithOAuth({
    provider: 'twitter',
    options: { redirectTo: `${url.origin}/api/twitter/callback` }
  });

  if (authError) throw error(502, authError.message);
  if (data.url) redirect(303, data.url);
  return error(401, 'Could not complete auth.');
}
