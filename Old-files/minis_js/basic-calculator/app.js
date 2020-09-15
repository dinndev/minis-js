
class Calculator {
    constructor(currentOperandTextElement , previousOperandTextElement) {
       this.currentOperandTextElement = currentOperandTextElement;
       this.previousOperandTextElement = previousOperandTextElement;
       this.clear();
    }
    //used as variables
    clear(){
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;  
    } 
    // deleting the last of the index
    delete(){
    this.currentOperand = this.currentOperand.toString().slice(0 , -1); 
    }

    appendNumber(number){
        //check if theres a point already
        if(number === '.' && this.currentOperand.includes('.'))return
        //append the number or concatinating it instead 
    this.currentOperand = this.currentOperand.toString() + number.toString();
       

    } 
   chooseOperation(operation){
       if(this.currentOperand === '')return;
       if(this.previousOperand !== ''){
           this.compute;
       }
    this.operation = operation;
    // showing the status on previousOperand 
    this.previousOperand = this.currentOperand + operation;
    this.currentOperand = '';

   }

   compute(){ 
    let computation ;
    const current = parseFloat(this.currentOperand) ;
    const prev = parseFloat(this.previousOperand);
    if(isNaN(current) || isNaN(prev)) return;
    // choose operation button
    switch(this.operation){
    case '+' : 
    computation = current + prev ;
    break;
    case '-' : 
    computation = current - prev ;
    break;
    case '*' : 
    computation = current * prev ;
    break;
    case '÷' : 
    computation = current / prev ;
    break;
    default : return; 
    }
    // this.operation = undefined;
        this.currentOperand = computation;
        this.previousOperand = '';
        if(computation !== ''){
              
        }
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


const calculator = new Calculator(currentOperandTextElement , previousOperandTextElement);

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

// clearing the calculator
allClearButton.addEventListener('click',_=> {
    calculator.clear();
    calculator.updateDisplay();
});


equallsButton.addEventListener('click',_=> {
    calculator.compute();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click',_=> {
    calculator.delete();
   calculator.updateDisplay();
})