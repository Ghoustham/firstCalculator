    //selectors
const currentTextValue = document.querySelector('.current-value')
const previusTextValue = document.querySelector('.previus-value')
const numberButtons = document.querySelectorAll('[number-buttons]');
const operators = document.querySelectorAll('.sign');
const equalsButton = document.querySelector('.equals');
const display = document.querySelector('.display');


class Calculator {
    constructor(currentTextValue, previusTextValue){
        this.currentTextValue = currentTextValue;
        this.previusTextValue = previusTextValue;
        this.clearAll();
    
    }

    
    clearAll(){
        this.currentValue = ''
        this.previusValue = ''
        this.operation = undefined
    } 
    
    updateDisplay(){
        this.currentTextValue.innerText = this.currentValue
        this.previusTextValue.innerText = this.previusValue
        
    }
    appendNumber(number){
        if (number === '.' & this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString()
        
    }
    chooseOperation(operation){
        if(this.currentValue === '')return
        this.operation = operation
        this.previusValue = this.currentValue
        this.currentValue = '';
    }

    compute(){}
    
    
    
    
    
}

const calculator = new Calculator (currentTextValue, previusTextValue)

numberButtons.forEach(button => {
    
    button.addEventListener('click', ()=>{
        
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
        
    })
    
})

operators.forEach(operator => {
    
    operator.addEventListener('click', ()=>{
        
        calculator.chooseOperation(operator.innerText);
        calculator.updateDisplay()
        
    })
    
})