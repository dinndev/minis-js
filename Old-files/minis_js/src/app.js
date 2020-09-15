
// variables
const container = document.querySelector('.main');
let input = document.querySelector('input');
const button = document.querySelector('.add'); 
const ul = document.createElement('ul');
const div = document.querySelector('.ulList');
const todoContainer = document.querySelector('.todo-container');
const clear = document.querySelector('.clear');

// Events
button.addEventListener('click', createList);
clear.addEventListener('click' ,clearBtn)


// Functions
function createList(e){
    e.preventDefault()
    const li = document.createElement('li'); //create a lists
    li.classList.add('lists')
    let val = input.value //value of input
    li.innerHTML = val 
     ul.appendChild(li); //append the li to our ul
     todoContainer.appendChild(ul);
     input.value = ""
}
function clearBtn(){ 
   const todos = Array.from(ul.children);
    todos.forEach(todo => {
        todo.classList.add('fade');
     todo.addEventListener('transitionend', _=> todo.remove());
    })

 }






