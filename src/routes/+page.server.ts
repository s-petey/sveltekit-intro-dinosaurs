import { db } from '$lib/server/db';
import { dinosaur } from '$lib/server/db/schema';
import { count, like } from 'drizzle-orm';

export const load = async ({ url }) => {
  const queryParams = url.searchParams;

  const q = queryParams.get('q');
  const pageParam = queryParams.get('page');
  let page = 1;
  if (pageParam) {
    const parsedPage = parseInt(pageParam);
    if (!isNaN(parsedPage)) {
      page = parsedPage;
    }
  }
  const limitParam = queryParams.get('limit');
  let limit = 25;
  if (limitParam) {
    const parsedLimit = parseInt(limitParam);
    if (!isNaN(parsedLimit)) {
      limit = parsedLimit;
    }
  }
  const offset = Math.abs((page - 1) * limit);
  const [paginatedDinos, [{ count: totalDinos }]] = await Promise.all([
    db
      .select()
      .from(dinosaur)
      .where(
        typeof q === 'string' && q.length > 0
          ? like(dinosaur.name, `%${q}%`)
          : undefined,
      )
      .offset(offset)
      .limit(limit),
    db
      .select({
        count: count(),
      })
      .from(dinosaur)
      .where(
        typeof q === 'string' && q.length > 0
          ? like(dinosaur.name, `%${q}%`)
          : undefined,
      ),
  ]);

  const totalPages = Math.ceil(totalDinos / limit);

  return {
    dinos: paginatedDinos,
    q,
    page,
    limit,
    totalPages,
    totalDinos,
  };
};
