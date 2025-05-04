<script lang="ts">
  import Remove from './Remove.svelte';
  import type { Task } from './Task.class.svelte';
  import Title from './Title.svelte';

  let {
    task,
    removeTask,
    updateTask,
  }: {
    task: Task;
    removeTask: (index: Task['id']) => void;
    updateTask: (index: Task['id'], title: string) => void;
  } = $props();

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

  <div class="flex gap-2">
    <button
      type="button"
      class="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onclick={task.logProxy}
    >
      Proxy
    </button>
    <button
      type="button"
      class="rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onclick={task.logSnapshot}
    >
      Snap
    </button>
  </div>
</div>
