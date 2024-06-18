import { error, redirect } from '@sveltejs/kit';

export async function GET({ url, locals: { supabase } }) {
  const code = url.searchParams.get('code');
  const next = url.searchParams.get('next') ?? '/quests';

  if (!code) throw error(401, 'Could not complete auth.');

  const {
    data: { user },
    error: authError
  } = await supabase.auth.exchangeCodeForSession(code);

  if (authError) {
    console.error(authError);
    throw error(502, authError.message);
  }

  if (!user) {
    const message = 'Did not receive a user profile.';
    console.error(message);
    throw error(502, message);
  }

  return redirect(303, next);
}
