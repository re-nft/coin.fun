// import { fail } from '@sveltejs/kit';
// import { flatten, ValiError } from 'valibot';
//
// import { db } from '$lib/server/db';
// import { user, userParse } from '$lib/server/schema';
//
// export async function load() {
//   // this is `export let data` on a +page.svelte
//   return {
//     users: await db.select().from(user)
//   };
// }
//
// export const actions = {
//   default: async ({ request }) => {
//     const form = await request.formData();
//
//     const data = {
//       name: form.get('name'),
//       email: form.get('email') || null
//     };
//
//     try {
//       const value = userParse(data);
//       const result = await db.insert(user).values(value).returning();
//       return { user: result };
//     } catch (error) {
//       if (error instanceof ValiError) {
//         const { nested: errors } = flatten(error);
//         return fail(400, { data, errors });
//       }
//
//       throw error;
//     }
//   }
// };
