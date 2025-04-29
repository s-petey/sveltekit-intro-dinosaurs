<script lang="ts">
  import type { Task } from './Task.class.svelte';
  let { taskId, removeTask } = $props<{
    taskId: Task['id'];
    removeTask: (index: Task['id']) => void;
  }>();

  $effect.pre(() => {
    console.log('Remove render', taskId);
  });
</script>

<button
  type="button"
  class="h-10 w-10 cursor-pointer rounded border-2 border-red-500 text-red-500"
  onclick={() => removeTask(taskId)}
>
  ✖︎
</button>
