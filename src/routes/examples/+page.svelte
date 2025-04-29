<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageProps } from './$types';

  let { form }: PageProps = $props();

  let colorValue = $state(0);

  let colorValues = $derived.by(() => {
    var red =
      (colorValue > 50 ? 1 - (2 * (colorValue - 50)) / 100.0 : 1.0) * 255;
    var green = (colorValue > 50 ? 1.0 : (2 * colorValue) / 100.0) * 255;
    var blue = 0.0;
    return {
      red,
      green,
      blue,
    };
  });
</script>

<svelte:head>
  <title>Examples</title>
</svelte:head>

<div class="flex flex-col gap-4">
  <section class="mb-4">
    <h2 class="mb-2 text-xl">
      Say hello -- enhanced
      {#if form?.message}
        <span class="font-bold text-emerald-600">{form.message}</span>
      {/if}
    </h2>
    <form use:enhance method="post" action="?/hello">
      <input class:border-red-500={form?.missing} type="text" name="name" />
      <button
        class="cursor-pointer rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
        type="submit"
      >
        Send
      </button>
    </form>
  </section>

  <section class="mb-4">
    <h2 class="mb-2 text-xl">
      Say hello -- <span class="text-red-600">not-enhanced</span>
      {#if form?.message}
        <span class="font-bold text-emerald-500">{form.message}</span>
      {/if}
    </h2>
    <form method="post" action="?/hello">
      <input class:border-red-500={form?.missing} type="text" name="name" />
      <button
        class="cursor-pointer rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
        type="submit"
      >
        Send
      </button>
    </form>
  </section>

  <hr />

  <section class="mb-4">
    <h2 class="mb-2 text-xl">Seed the database</h2>
    <form class="flex items-center" method="post" action="?/seed">
      <button
        class="cursor-pointer rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
        type="submit"
      >
        Send
      </button>
    </form>
  </section>

  <hr />

  <section class="mb-4">
    <section class="mb-4">
      <h2 class="mb-2 text-xl">Reactive slider <span>{colorValue}%</span></h2>
      <form>
        <input
          class="w-full"
          type="range"
          min="0"
          max="100"
          bind:value={colorValue}
        />
        <div
          class="h-4 w-full rounded bg-gray-200"
          style={`background: rgb(${colorValues.red}, ${colorValues.green}, ${colorValues.blue})`}
        ></div>
      </form>
    </section>

    <hr />
  </section>
</div>

<style>
  input[type='range'] {
    accent-color: transparent;
  }
</style>
