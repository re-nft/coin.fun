import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  async complete({ request, locals: { quests, safeGetSession } }) {
    const { user } = await safeGetSession();

    if (!user) return fail(401);

    const form = await request.formData();
    const questId = form.get('questId');
    const quest = quests.find(({ id }) => id === questId);

    if (!quest) return fail(400);

    const ok = await quest.complete();
    if (request.headers.has('x-sveltekit-action')) return { ok };
    else return redirect(303, '/quests');
  }
};
