
// Selectors
const form = document.querySelector('form');
const button = document.querySelector('button');
const title = document.querySelector('.title');
const container = document.querySelector('.container')
const note = document.querySelector('.note-input')
// Ui

class Ui {
    static addNotes(e){
        e.preventDefault() //prevent the actual submit
      const noteTitle = title.value;
      const notesVal = note.value;
    //create a div for notes
     const div = document.createElement('div');
     div.classList.add('wrapper');
    // appending the h2 to our div
     div.innerHTML = `<h2 class="note-title">${noteTitle}</h2>
      <span class="view-btn">View More</span>
     `
    // append the created div to container div
      container.appendChild(div);
    Ui.clearInput()
    }
   static clearInput(){
      note.value = "" 
      title.value = ""
   }
}


// Validation
//  if(){

//  }

button.addEventListener('click',Ui.addNotes)