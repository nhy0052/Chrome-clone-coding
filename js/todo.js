const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let toDos = [];

//todo list 화면에 그리기
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="❌";
  button.addEventListener("click",deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//todo 추가
function TodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodObj = {         //todo 객체를 만들어서 저장
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodObj);    //
  paintTodo(newTodObj);     //추가한 뒤에 화면에 출력해줌
  saveToDos();           //localStorage에 저장
}

//todo 삭제
function deleteTodo(event){
  const li = event.target.parentElement; //삭제하고 싶은 li
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//todo 저장
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", TodoSubmit);

//새로고침해도 화면에 보이게 하기 위해
const saveTodos = localStorage.getItem("todos")
if(saveTodos){
  const parsedToDos = JSON.parse(saveTodos);
  toDos = parsedToDos;       //이전 todo들을 저장하기 위해 toDos에 할당
  parsedToDos.forEach(paintTodo);
}

