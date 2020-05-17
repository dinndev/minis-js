// SELECTOR
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption  = document.querySelector('.filter-todo');
const clearBtn = document.querySelector('.clear-btn');
// EVENTS
document.addEventListener('DOMContentLoaded' ,getTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' ,deleteCheck);
filterOption.addEventListener('click', filterTodo);
clearBtn.addEventListener('click', clearTodo);


// FUNCTIONS
function addTodo (e) {
    // prevent the form on submitting
    e.preventDefault();
    // create new div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
  //create new li
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   newTodo.textContent = todoInput.value
   todoDiv.appendChild(newTodo);
   // set local storage
  saveLocalTodos(todoInput.value)
 // create a checkmark button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<li class="fa fa-check"> </li>'
   todoDiv.appendChild(completeButton);
   completeButton.classList.add('complete-btn')
    // create a trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fa fa-trash"> </li>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
 //append the todoDiv to ul
    todoList.appendChild(todoDiv);
   // clear the input value
   todoInput.value = ""

   }

//checking if its delete or check
function deleteCheck(e){
   const item = e.target
   const todo = item.parentElement
// trash button
  if (item.classList[0] == 'trash-btn'){
      todo.classList.add('fall');
      removeLocalTodos(todo);
      // transitionend event
     todo.addEventListener('transitionend', function(){
         todo.remove()
     });     
   //  complete mark
  } 
  if (item.classList[0] == 'complete-btn'){
     todo.classList.toggle('completed');

  }
}
//Filter select

function filterTodo (e) {
    const todos = todoList.children
   //  convert todos into array to use foreach
    const children = Array.from(todos);
   children.forEach(todo => {
      switch(e.target.value){
         case "all" : 
           todo.style.display = "flex"
        break;
        case "completed" : if (todo.classList.contains("completed")){
         todo.style.display = "flex"
        } else {
         todo.style.display = "none"
        }
        break;
        case "incomplete" : if(!todo.classList.contains("completed")){
         todo.style.display = "flex"
        } else {
         todo.style.display = "none"
        } break;
      }
      
   })
   }
function clearTodo(e) {
   // prevent page from reloading
   e.preventDefault()
   const todos = todoList.children
   const children = Array.from(todos);
   children.forEach(todo => {
      localStorage.removeItem("todos")
      todo.remove()
   })
}
function saveLocalTodos(todo) {
  let todos;
//check if the local storage have a content
  if(localStorage.getItem("todos") === null){
      todos = [];
  } else {
      todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos" , JSON.stringify(todos))
} 

function getTodo (e){
   let todos;
   //check if the local storage have a content
     if(localStorage.getItem("todos") === null){
         todos = [];
     } else {
         todos = JSON.parse(localStorage.getItem('todos'));
     }
     localStorage.setItem("todos" , JSON.stringify(todos))
     todos.forEach(todo => {
      const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
  //create new li
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   newTodo.textContent = todoInput.value
   todoDiv.appendChild(newTodo);
   // set local storage
     newTodo.innerText = todo
 // create a checkmark button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<li class="fa fa-check"> </li>'
   todoDiv.appendChild(completeButton);
   completeButton.classList.add('complete-btn');
    // create a trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fa fa-trash"> </li>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
 //append the todoDiv to ul
    todoList.appendChild(todoDiv);
     });
}
function removeLocalTodos (todo){
   if(localStorage.getItem("todos") === null){
      todos = [];
  } else {
      todos = JSON.parse(localStorage.getItem('todos'));
  }
    const todosIndex = todo.children[0].textContent
    todos.splice(todos.indexOf(todosIndex),1);
     localStorage.setItem("todos" ,JSON.stringify(todos));
}