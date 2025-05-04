import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Suppress well-known Chrome DevTools requests
  if (
    event.url.pathname.startsWith(
      '/.well-known/appspecific/com.chrome.devtools',
    )
  ) {
    // Return empty response with 204 No Content
    return new Response(null, { status: 204 });
  }

  return await resolve(event);
};
