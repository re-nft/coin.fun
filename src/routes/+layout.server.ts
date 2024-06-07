export async function load({ depends, locals: { safeGetSession } }) {
  depends('supabase:auth');
  const { session, user } = await safeGetSession();
  return { session, user };
}
