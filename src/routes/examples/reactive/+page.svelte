<script lang="ts">
  import Task from './Task.svelte';
  import { Task as TaskClass } from './Task.class.svelte';

  const names = ['Alice', 'Bob', 'Charlie'];
  const importances = ['High', 'Medium', 'Low'];

  function generateNewId() {
    return Math.floor(Math.random() * Date.now() * 1000);
  }

  let tasks = $state<TaskClass[]>(
    Array.from(
      { length: 10 },
      () =>
        new TaskClass({
          id: generateNewId(),
          title: names[Math.floor(Math.random() * names.length)],
          importance:
            importances[Math.floor(Math.random() * importances.length)],
          tags: [],
        }),
    ),
  );

  function addTaskToTop() {
    tasks.unshift(
      new TaskClass({
        id: generateNewId(),
        title: names[Math.floor(Math.random() * names.length)],
        importance: importances[Math.floor(Math.random() * importances.length)],
        tags: [],
      }),
    );
  }

  function removeTask(index: TaskClass['id']) {
    const foundTask = tasks.find((task) => task.id === index);
    if (foundTask) {
      tasks.splice(tasks.indexOf(foundTask), 1);
    }
  }

  function addTaskToBottom() {
    tasks.push(
      new TaskClass({
        id: generateNewId(),
        title: names[Math.floor(Math.random() * names.length)],
        importance: importances[Math.floor(Math.random() * importances.length)],
        tags: [],
      }),
    );
  }

  function addTenTasks() {
    for (let i = 0; i < 10; i++) {
      tasks.push(
        new TaskClass({
          id: generateNewId(),
          title: names[Math.floor(Math.random() * names.length)],
          importance:
            importances[Math.floor(Math.random() * importances.length)],
          tags: [],
        }),
      );
    }
  }

  function removeRandom() {
    const randomTasks = tasks
      .map((_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    for (const index of randomTasks) {
      const foundTask = tasks.at(index);
      if (foundTask) {
        tasks.splice(tasks.indexOf(foundTask), 1);
      }
    }
  }
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-row items-center gap-4">
    <h1 class="text-2xl">Reactivity</h1>
    <span>|</span>
    <h2 class="text-xl">Task list</h2>
  </div>

  <div class="flex flex-row justify-evenly gap-4">
    <button
      class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
      onclick={addTaskToTop}
    >
      Add top
    </button>
    <button
      class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
      onclick={addTaskToBottom}
    >
      Add bottom
    </button>

    <button
      class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
      onclick={addTenTasks}
    >
      Add 10
    </button>

    <button
      class="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-green-700"
      onclick={removeRandom}
    >
      Remove some
    </button>
  </div>

  <div class="flex flex-row justify-evenly gap-4">
    <span class="font-bold">
      High: {tasks.filter((task) => task.importance === 'High').length}
    </span>
    <span class="font-bold">
      Medium: {tasks.filter((task) => task.importance === 'Medium').length}
    </span>
    <span class="font-bold">
      Low: {tasks.filter((task) => task.importance === 'Low').length}
    </span>
  </div>

  <section class="flex max-h-52 flex-col gap-2 overflow-y-auto">
    {#each tasks as task (task.id)}
      <Task {task} {removeTask} />
    {/each}
  </section>
</div>
