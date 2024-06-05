export async function load({ locals: { safeGetSession } }) {
  const { user } = await safeGetSession();
  return { user };
}
