<script lang="ts">
  let message = $state<null | Promise<string>>(null);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchMessage() {
    await sleep(2000);
    return 'Have fetched within the component';
  }
  async function fetchError(): Promise<string> {
    await sleep(2000);
    throw new Error('Have thrown an error within the component');
  }
</script>

<button
  class="cursor-pointer rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
  type="button"
  onclick={() => (message = fetchMessage())}>Fetch</button
>
<button
  class="cursor-pointer rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
  type="button"
  onclick={() => (message = fetchError())}>Throw</button
>

{#if message !== null}
  {#await message}
    Loading message...
  {:then message}
    The loaded data is: {message}.
  {:catch someError}
    System error: {someError.message}.
  {/await}
{/if}
