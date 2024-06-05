import { error, redirect } from '@sveltejs/kit';

export async function GET({ url, locals: { supabase } }) {
  const code = url.searchParams.get('code');
  const next = url.searchParams.get('next') ?? '/';

  if (!code) throw error(401, 'Could not complete auth.');

  const { error: authError } = await supabase.auth.exchangeCodeForSession(code);

  if (authError) throw error(502, authError.message);

  return redirect(303, next);
}
