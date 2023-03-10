import { Task } from "./tasks";
export class TaskManager {
  tasks: Task[] = [];
  addTask(task: Task) {
    this.tasks.push(task);
  }
  removeTask(timeStamp: string) {
    let index = this.tasks.findIndex((t) => t.timeStamp === timeStamp);
    this.tasks.splice(index, 1);
  }
  updateTask(task: Task) {
    let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
    this.tasks.splice(index, 1, task);
  }
}

export let tm = new TaskManager();
