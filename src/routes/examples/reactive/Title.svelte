<script lang="ts">
  import type { Task } from './Task.class.svelte';
  let {
    taskId,
    title,
    updateTask,
  }: {
    taskId: Task['id'];
    title: Task['title'];
    updateTask: (index: Task['id'], title: string) => void;
  } = $props();

  $effect.pre(() => {
    console.log('Title render', title);
  });
</script>

<input
  class="flex grow"
  type="text"
  value={title}
  onchange={(event) => {
    updateTask(taskId, event.currentTarget.value);
  }}
/>
