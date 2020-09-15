
// Selectors 
const table = document.querySelector('table');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
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
              case "name" : name = el.value;
              break;
              case "date" : date = el.value;
              break;
              case "amount" : amount = el.value;
           }
          row.innerHTML = `
          <td>${name}</td>
          <td>${date}</td>
          <td>${amount}</td>
          `
          el.value = '' //emptying the value
          return table.appendChild(row);
      });
   }
}

// Instance
const test = new Expence(inputs);

// Events
button.addEventListener('click' ,Expence.addExpence)
