export class Task {
  id: number;
  title = $state('');
  importance = $state('');
  tags: string[] = $state([]);

  constructor(data: Omit<Task, 'logProxy' | 'logSnapshot'>) {
    this.id = data.id;
    this.title = data.title;
    this.importance = data.importance;
    this.tags = data.tags;
  }

  logProxy = () => {
    console.log('title', this.title);
    console.log('importance', this.importance);
    console.log('tags', this.tags);
  };

  logSnapshot = () => {
    console.log('title', $state.snapshot(this.title));
    console.log('importance', $state.snapshot(this.importance));
    console.log('tags', $state.snapshot(this.tags));
  };
}
