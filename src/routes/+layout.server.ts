import { parseLocale } from '$lib/utils/locale';

export async function load({ depends, locals: { safeGetSession }, request }) {
  depends('supabase:auth');

  const locale = parseLocale(request.headers.get('accept-language')) || 'en';

  const { session, user } = await safeGetSession();
  return { locale, session, user };
}
