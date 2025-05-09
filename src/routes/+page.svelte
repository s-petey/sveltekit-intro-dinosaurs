<script lang="ts">
  import { goto } from '$app/navigation';
  import { page as sveltePage } from '$app/state';

  let { data } = $props();

  function handlePageChange(page: number) {
    const params = new URLSearchParams(sveltePage.url.searchParams);

    params.set('page', page.toString());
    goto(`?${params.toString()}`, { keepFocus: true });
  }

  function handleQueryChange(
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    },
  ) {
    event.preventDefault();

    const q = event.currentTarget.q.value;
    const params = new URLSearchParams(sveltePage.url.searchParams);

    if (q) {
      params.set('q', q);
      params.set('page', '1');
      goto(`?${params.toString()}`, { keepFocus: true });
    } else {
      params.delete('q');
      params.delete('page');
      goto(`?${params.toString()}`, { keepFocus: true });
    }
  }
</script>

<svelte:head>
  <title>Bun Sveltekit</title>
</svelte:head>

<form onsubmit={handleQueryChange} class="mb-4">
  <label class="mb-2 block text-sm font-bold" for="q">Search</label>
  <input
    class="focus:shadow-outline w-ful form-input appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
    type="text"
    id="q"
    name="q"
    placeholder="Search"
    defaultValue={data.q ?? ''}
  />
</form>

<section class="mb-4 grid max-h-96 grid-cols-2 gap-4 overflow-y-auto">
  {#each data.dinos as item (item.id)}
    <a class="rounded border p-4" href="/{item.name}">{item.name}</a>
  {/each}

  {#if data.dinos.length === 0}
    <p>No dinos found</p>
  {/if}
</section>

<!-- pagination -->
{#if data.totalPages > 0}
  <div class="mb-4 flex justify-center">
    <div class="grid grid-flow-col gap-2 overflow-hidden">
      {@render pageButton(data.page - 1, data.page === 1, false, '←')}

      {#each { length: data.totalPages }, page (page)}
        {#if page >= data.page - 2 && page <= data.page + 2}
          {@render pageButton(
            page + 1,
            data.page === page + 1,
            data.page === page + 1,
            page + 1,
          )}
        {:else if (page === 0 || page === 1) && page !== data.page - 1}
          {@render pageButton(
            page + 1,
            data.page === page + 1,
            data.page === page + 1,
            page + 1,
          )}
        {:else if page >= data.totalPages - 2 && page !== data.page - 1}
          {@render pageButton(
            page + 1,
            data.page === page + 1,
            data.page === page + 1,
            page + 1,
          )}
        {/if}
      {/each}

      {@render pageButton(
        data.page + 1,
        data.page === data.totalPages,
        false,
        '→',
      )}
    </div>
  </div>
{/if}

{#snippet pageButton(
  page: number,
  disabled: boolean,
  active: boolean,
  child: string | number,
)}
  <button
    class="cursor-pointer rounded border p-4"
    class:disabled
    {disabled}
    class:active
    type="button"
    onclick={() => handlePageChange(page)}
  >
    {child}
  </button>
{/snippet}

<style lang="postcss">
  .active {
    background-color: var(--color-emerald-400);
    color: var(--color-white);
  }

  .disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
</style>
