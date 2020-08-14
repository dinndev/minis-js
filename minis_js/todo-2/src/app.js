
// variables
const container = document.querySelector('.main');
let input = document.querySelector('input');
const button = document.querySelector('.add'); 
const ul = document.createElement('ul');
const div = document.querySelector('.ulList');
const todoContainer = document.querySelector('.todo-container');
const clear = document.querySelector('.clear');
const alert = document.querySelector('.alert');
let color;
let text;
// Events
button.addEventListener('click', createList);
clear.addEventListener('click' ,clearBtn)
document.addEventListener('DOMContentLoaded' , getTodo)

// Functions
function createList(e){
    e.preventDefault()
    const li = document.createElement('li'); //create a lists
    li.classList.add('lists')
    let val = input.value //value of input
    if(val === ""){
       text = 'Add something'
       color = 'red'
      return alerts(color , text);
    } else {
      text = 'Todo added'
       color = '#56C368'
       alerts(color ,text)
     li.innerText = val
    }
     ul.appendChild(li); //append the li to our ul
     todoContainer.appendChild(ul);
     saveLocalTodos(val);
     input.value = ""
}
// save the todos to local storage
function saveLocalTodos(todo) {
    let todos;
   if(localStorage.getItem('todos') == null) {
        todos = []
   } else {
    todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos));
}
// ClearTodo
  function getTodo(e) {
      let todos;
     if(localStorage.getItem('todos') === null) {
       todos = []
     } else {
        todos = JSON.parse(localStorage.getItem('todos'));
     }
     todos.forEach(todo => {
      e.preventDefault()
      const li = document.createElement('li'); //create a lists
      li.classList.add('lists')
      li.innerHTML = todo
       ul.appendChild(li); //append the li to our ul
       todoContainer.appendChild(ul);
     })
}

// ClearBtn 
function clearBtn(){ 
   const todos = Array.from(ul.children);
   localStorage.removeItem('todos')
    todos.forEach(todo => {
        todo.classList.add('fade');
     todo.addEventListener('transitionend', _=> {
        todo.remove()
     });
    })
 }

 function alerts(color , text){
    alert.style.backgroundColor = color
    alert.innerText = text
    alert.classList.add('active');
    alert.addEventListener('transitionend', _=> alert.classList.remove('active'))
 }






