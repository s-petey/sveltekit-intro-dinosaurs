export class Task {
  id: number;
  title = $state('');
  importance = $state('');
  tags: string[] = $state([]);

  constructor(data: Task) {
    this.id = data.id;
    this.title = data.title;
    this.importance = data.importance;
    this.tags = data.tags;
  }
}
