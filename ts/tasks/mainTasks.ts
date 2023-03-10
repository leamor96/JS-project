import { Status, Task } from "./tasks.js";
import { tm } from "./task-manager.js";
const tasksDiv = document.getElementById("tasks") as HTMLDivElement;
const todoDescription = document.getElementById("todo-description") as HTMLInputElement;
const btnAddTodo = document.getElementById("btn-add-todo") as HTMLButtonElement;

btnAddTodo.addEventListener("click", () => {
  let text = todoDescription.value;
  let task = new Task(text);
  tm.addTask(task);
  addTaskToHTML(task);
});

function addTaskToHTML(task: Task) {
  let row = document.createElement("div");
  row.classList.add("task", "row", "bg-primary");
  row.id = task.timeStamp;
  let input = document.createElement("input");
  input.classList.add("col-10");
  input.placeholder = "description";
  input.disabled = true;
  input.value = task.description;

  input.addEventListener("input", () => {
    task.description = input.value;
    tm.updateTask(task);
  });

  let btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "btn-warning", "col", "text-light");
  btnEdit.innerHTML = 'Edit: <i class="bi bi-pencil-square"></i>';
  btnEdit.addEventListener("click", () => {
    input.disabled = !input.disabled;
  });

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "col");
  btnDelete.innerHTML = 'Delete: <i class="bi bi-trash3-fill"></i>';
  btnDelete.addEventListener("click", () => {
    tm.removeTask(task.timeStamp);
    deleteTaskFromHTML(task);
  });

  let btnCompleted = document.createElement("button");
  btnCompleted.classList.add("btn", "col");
  btnCompleted.id = task.timeStamp;
  btnCompleted.innerHTML = task.status;
  btnCompleted.addEventListener("click", () => {
    task.status = Status.Completed;
    btnCompleted.innerHTML = task.status;
    btnCompleted.classList.add("btn-success");
  });

  row.appendChild(input);
  row.appendChild(btnEdit);
  row.appendChild(btnDelete);
  row.appendChild(btnCompleted);
  tasksDiv.appendChild(row);
}

function deleteTaskFromHTML(task: Task) {
  document.getElementById(task.timeStamp)?.remove();
}
