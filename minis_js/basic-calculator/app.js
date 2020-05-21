
class Calculator {
    constructor(currentOperandTextElement , previousOperandTextElement) {
       this.currentOperandTextElement = currentOperandTextElement;
       this.previousOperandTextElement = previousOperandTextElement;
       this.clear();
    }
    clear(){
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;  
    } 

    delete(){
   
    }

    appendNumber(number){
        //check if theres a point already
        if(number === '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString();
    } 
   chooseOperation(operation){
       if(this.currentOperand === '')return
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.previousOperand = this.currentOperand + operation;
    this.currentOperand = ''

   }

   compute(){

   }

   updateDisplay(){
    //update the display of current operand
      this.currentOperandTextElement.innerText = this.currentOperand;
      this.previousOperandTextElement.innerText = this.previousOperand;
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

//click event for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', _ => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    } )
});

// operation buttons 
operationButtons.forEach(button => {
    button.addEventListener('click' , _=> {
        calculator. chooseOperation(button.innerText)
        calculator.updateDisplay();
    });
});

