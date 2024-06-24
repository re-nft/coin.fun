import { fail, redirect } from '@sveltejs/kit';

import { type QuestCallError } from '$lib/quests';
export const actions = {
  async complete({ request, locals: { quests, user } }) {
    if (!user) return fail(401);

    const form = await request.formData();
    const questId = form.get('questId');
    const quest = quests.find(({ id }) => id === questId);

    if (!quest) return fail(400);

    const ok = await quest.complete();
    if (request.headers.has('x-sveltekit-action')) return { ok };
    else return redirect(303, '/quests');
  },
  async call({ request, locals: { quests, user } }) {
    if (!user) return fail(401);

    const form = await request.formData();
    const questId = form.get('questId');
    const methodName = form.get('methodName');
    const params = form.getAll('params[]') ?? [];

    console.debug(`Quest:call ${questId} ${methodName} [${params}]`);

    const errors: QuestCallError[] = [];

    function throwError(error: (typeof errors)[number]) {
      errors.push(error);
      return fail(400, { errors });
    }

    try {
      if (!methodName || typeof methodName !== 'string') {
        return throwError({
          name: 'NoMethodName',
          message: `Invalid call: "methodName" is "${String(methodName)}".`
        });
      }

      const quest = quests.find(({ id }) => id === questId);

      if (!quest) {
        return throwError({
          name: 'NoQuest',
          message: `Could not find a quest with id "${questId}"`
        });
      }

      const proto = Object.getPrototypeOf(quest);

      if (!(methodName in proto)) {
        return throwError({
          name: 'NoMethodInQuest',
          message: `Quest "${questId}" does not have a method named "${methodName}".`
        });
      }

      const method: (...args: unknown[]) => unknown = proto[methodName];
      console.log('params', method.length);

      if (
        !params.every((param) => typeof param === 'string') ||
        params.length !== method.length
      ) {
        console.log(params);
        return throwError({
          name: 'NoValidParams',
          message: `Quest:${methodName} expects ${method.length} arguments.`
        });
      }

      const result = await method.call(quest, params);

      if (request.headers.has('x-sveltekit-action')) return result;
      else return redirect(303, '/quests');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      errors.push({ name: 'QuestCallError', message });

      console.error(
        `QuestCallError: ${message}`,
        new Error(errors.reverse().join('\n\t'), { cause: error })
      );
      return fail(400, { errors });
    }
  }
};
