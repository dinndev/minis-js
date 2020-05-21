
class Calculator {
    constructor(currentOperandTextElement , previousOperandTextElement) {
       this.currentOperandTextElement = currentOperandTextElement;
       this.previousOperandTextElement = previousOperandTextElement;
       this.clear()
    }
    clear(){
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;  
    } 

    delete(){

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString();
    } 
   chooseOperation(operation){

   }

   compute(){

   }

   updateDisplay(){
      this.currentOperandTextElement.innerText = this.currentOperand; 
   }
}






// SELECTOR
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equallsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const deleteBtn = document.querySelector('[data-delete]'); 


const calculator = new Calculator( currentOperandTextElement , previousOperandTextElement);
  
numberButtons.forEach(button => {
    button.addEventListener('click', _ => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    } )
})
   