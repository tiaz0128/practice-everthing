class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetail() {
    console.log(`${this.complete ? "✅ " : "⬛ "}${this.id}\t${this.task}\t`);
  }
}

export default TodoItem;
