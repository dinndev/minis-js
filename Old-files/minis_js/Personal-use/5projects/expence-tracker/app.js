
// Selectors 
const table = document.querySelector('table');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('[data-key="button"]');
class Expence {
    constructor(input){
       this.input = input;
    }
    // gettr
    get inputs(){
        return this.input;
    }
   static addExpence(e){
    e.preventDefault() // prevent the default submit
     let name,
     date,
     amount;
     const row = document.createElement('tr');
      inputs.forEach(el => {
        if(el.value === '')return
          switch(el.dataset.key){ //check for the data key and get individual val
              case "name" : name = el.value
              break;
              case "date" : date = el.value;
              break;
              case "amount" :amount = el.value;
           }
        // add the table data in table row
          row.innerHTML = ` 
          <td>${name}</td>
          <td>${date}</td>
          <td>${amount}</td>
          <td>X</td> 
          `
          el.value = '' //emptying the value
          return table.appendChild(row);
      });
        // iterating to children of tr and removing its parent element
     Array.from(row.children).forEach(el => {
      if(el.innerHTML.includes('X')){
          el.addEventListener('click' ,_=> {
              el.parentElement.remove();
          })
      }
   })
   }
}


// Validate
const test = new Expence(inputs);
// Events
button.addEventListener('click',Expence.addExpence)
