
class Calculator {
    constructor( previousOperandTextElement , currentOperandTextElement) {
       this.previousOperandTextElement = previousOperandTextElement;
       this.currentOperandTextElement = currentOperandTextElement;
    }
    clear(){
      const test = this.currentOperand
     console.log(test)
    }  

    delete(){

    }

    appendNumber(number){

    }
   chooseOperation(operation){

   }

   compute(){

   }

   updateDisplay(){
        
   }
}






// SELECTOR
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equallsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[current-operand]');
const deleteBtn = document.querySelector('[data-delete]'); 

   
   