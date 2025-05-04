<script lang="ts">
  import Remove from './Remove.svelte';
  import type { Task } from './Task.class.svelte';
  import Title from './Title.svelte';
  let { task, removeTask, updateTask } = $props<{
    task: Task;
    removeTask: (index: Task['id']) => void;
    updateTask: (index: Task['id'], title: string) => void;
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
  <Title taskId={task.id} title={task.title} {updateTask} />
  <input
    class="flex grow"
    type="text"
    value={task.importance}
    onchange={(event) => {
      updateTask(task.id, event.currentTarget.value);
    }}
  />
</div>
