import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  return {
    user: {
      name: 'John Doe',
      email: 'Bt9m7@example.com',
    },
    title: 'Examples',
    description: 'Examples of SvelteKit and Tailwind CSS',
    keywords: 'sveltekit, tailwindcss, examples',
  };
};
