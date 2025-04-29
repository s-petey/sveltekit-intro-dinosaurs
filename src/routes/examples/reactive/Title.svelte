<script lang="ts">
  import type { Task } from './Task.class.svelte';
  let { title = $bindable() } = $props<{
    title: Task['title'];
  }>();

  $effect.pre(() => {
    console.log('Title render', title);
  });
</script>

<input class="flex grow" type="text" bind:value={title} />
