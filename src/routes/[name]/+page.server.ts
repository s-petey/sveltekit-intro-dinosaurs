import { db } from '$lib/server/db/index.js';
import { dinosaur } from '$lib/server/db/schema.js';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const load = async ({ params: { name } }) => {
  const [dino] = await db
    .select()
    .from(dinosaur)
    .where(eq(dinosaur.name, name))
    .limit(1);

  if (!dino) {
    throw error(404, { message: 'Dino not found' });
  }

  return { name: dino.name, description: dino.description };
};
