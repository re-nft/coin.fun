import { fail, redirect } from '@sveltejs/kit';

import * as Quests from '$lib/server/quests';

export const actions = {
  async complete({ request, locals: { safeGetSession } }) {
    const { user } = await safeGetSession();

    if (!user) return fail(401);

    const form = await request.formData();
    const questId = form.get('questId');
    const quest = Object.values(Quests).find(({ id }) => id === questId);

    if (!quest) return fail(400);

    const ok = await quest.complete(user.id);
    if (request.headers.has('x-sveltekit-action')) return { ok };
    else return redirect(303, '/quests');
  }
};
