const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  // console.log("Pepepee")
  const li = event.target.parentElement;
  li.remove();
}

function paintToDO(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  // console.log(li);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  // console.log(toDoInput.value);
  toDoInput.value = "";
  // console.log(newTodo, toDoInput.value);
  paintToDO(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);