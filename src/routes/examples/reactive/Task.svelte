<script lang="ts">
  import Remove from './Remove.svelte';
  import type { Task } from './Task.class.svelte';
  import Title from './Title.svelte';
  let { task, removeTask } = $props<{
    task: Task;
    removeTask: (index: Task['id']) => void;
  }>();

  $effect.pre(() => {
    console.log(
      'Task',
      {
        id: task.id,
        title: $state.snapshot(task.title),
        importance: $state.snapshot(task.importance),
        tags: $state.snapshot(task.tags),
      },
      'updated',
    );
  });
</script>

<div class="flex gap-2">
  <Remove taskId={task.id} {removeTask} />
  <Title bind:title={task.title} />
  <input class="flex grow" type="text" bind:value={task.importance} />

  <!-- TODO: implement tags editing -->
</div>
