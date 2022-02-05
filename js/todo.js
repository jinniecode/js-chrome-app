const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log("Pepepee")
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintToDO(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDO(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);
/*  arrow function으로 대신함
function sayHello(item) {
  console.log("this is the turn of", item);
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);

if (savedToDos/*==! null*/) {
  const parsedToDos = JSON.parse(savedToDos);
  //console.log(parsedToDos);
  //parsedToDos.forEach(sayHello);
  //parsedToDos.forEach((item) => console.log("this is the turn of", item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDO);
}