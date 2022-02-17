import * as inquirer from "inquirer";
import { data } from "../data";
import { Commands } from "../model/Commands";
import TodoItem from "../model/TodoItem";
import TodoCollection from "../service/TodoCollection";

class TodoConsole {
  private todoCollection: TodoCollection;
  private showCompleted: boolean;

  constructor() {
    this.showCompleted = true;

    const sampleTodos: TodoItem[] = data.map(
      ({ id, task, complete }) => new TodoItem(id, task, complete)
    );

    this.todoCollection = new TodoCollection("My Todo List", sampleTodos);
  }

  displayTodoList(): void {
    console.log(
      `======= ${this.todoCollection.userName} ======= (${
        this.todoCollection.getItemCounts().incomplete
      }) items todo`
    );

    this.todoCollection
      .getTodoItems(this.showCompleted)
      .forEach((item) => item.printDetail());
  }

  promptUser(): void {
    console.clear();
    this.displayTodoList();

    inquirer
      .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
      })
      .then((answers) => {
        switch (answers["command"]) {
          case Commands.Toggle:
            this.showCompleted = !this.showCompleted;
            this.promptUser();
            break;

          case Commands.Add:
            this.promptAdd();
            break;

          case Commands.Purge:
            this.todoCollection.removeComplete();
            this.promptUser();
            break;

          case Commands.Complete:
            if (this.todoCollection.getItemCounts().incomplete > 0) {
              this.promptComplete();
            } else {
              this.promptUser();
            }
            break;

          default:
            break;
        }
      });
  }

  promptAdd(): void {
    console.clear();
    inquirer
      .prompt({
        type: "input",
        name: "add",
        message: "Enter task:",
      })
      .then((answers) => {
        if (answers["add"] !== "") {
          this.todoCollection.addTodo(answers["add"]);
        }
        this.promptUser();
      });
  }

  promptComplete(): void {
    console.clear();
    inquirer
      .prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: this.todoCollection
          .getTodoItems(this.showCompleted)
          .map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete,
          })),
      })
      .then((answer) => {
        let completeTasks = answer["complete"] as number[];
        this.todoCollection
          .getTodoItems(true)
          .forEach((item) =>
            this.todoCollection.markComplete(
              item.id,
              completeTasks.find((id) => id === item.id) != undefined
            )
          );
        this.promptUser();
      });
  }
}

export default TodoConsole;
