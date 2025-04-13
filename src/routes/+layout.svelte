<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<header class="flex flex-row place-content-between items-center p-4">
  <nav class="flex flex-row items-center gap-4">
    <h1 class="text-2xl"><a href="/">Bun Sveltekit</a></h1>
    <h2 class="text-xl"><a href="/examples">Examples</a></h2>
  </nav>
  <img id="bun" class="w-32" src="/vite-bun.svg" alt="Vite with Bun" />
</header>

<main class="container mx-auto p-4">
  {@render children()}
</main>

<footer class="my-4 flex flex-row justify-center gap-4">
  <p class="font-bold">
    <a href="https://svelte.dev/docs/kit">Sveltekit docs</a>
  </p>
  <p class="font-bold">
    <a href="https://bun.sh/docs">Bun docs</a>
  </p>
</footer>

<style lang="postcss">
  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  #bun:hover {
    animation: wiggle 1s ease-in-out infinite;
  }
</style>
