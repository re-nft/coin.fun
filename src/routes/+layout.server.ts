export async function load({ depends, locals: { safeGetSession }, request }) {
  depends('supabase:auth');

  const acceptLanguage = request.headers.get('accept-language');
  const locale = acceptLanguage?.split?.(',').at(0) ?? 'en';

  const { session, user } = await safeGetSession();
  return { locale, session, user };
}
