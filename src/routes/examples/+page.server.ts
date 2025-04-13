import { runSeed } from '$lib/server/db/seed';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  seed: async () => {
    await runSeed();
  },
  hello: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');

    if (
      typeof name !== 'string' ||
      (typeof name === 'string' && name.length === 0)
    ) {
      return fail(400, {
        missing: true,
      });
    }

    return {
      message: `Hello, ${name}!`,
    };
  },
};
