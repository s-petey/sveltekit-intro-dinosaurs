import { type Actions } from '@sveltejs/kit';
import { runSeed } from '../lib/server/db/seed';
import { db } from '$lib/server/db';
import { dinosaur } from '$lib/server/db/schema';

export const load = async () => {
  const first10 = await db.select().from(dinosaur).limit(10);
  return { dinosaurs: first10 };
};

export const actions: Actions = {
  default: async ({ request }) => {
    await runSeed();
  },
};
