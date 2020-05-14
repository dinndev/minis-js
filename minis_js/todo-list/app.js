// SELECTOR
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption  = document.querySelector('.filter-todo');

// EVENTS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' ,deleteCheck);
filterOption.addEventListener('click', filterTodo);


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
function filterTodo(e){
   const todos = todoList.childNodes;
   todos.forEach(function(todo){
switch(e.target.value){
   case "All" : 
   todo.style.display = 'block';
   break;
   case "Completed" :
    if (todo.classList.contains('completed')){
   todo.style.display = 'flex';
   } else {
      todo.style.display = 'none';
   }
}
   });
}