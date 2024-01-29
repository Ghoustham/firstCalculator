    //selectors
const currentTextValue = document.querySelector('.current-value')
const previusTextValue = document.querySelector('.previus-value')
const numberButtons = document.querySelectorAll('[number-buttons]');
const operators = document.querySelectorAll('.sign');
const equalsButton = document.querySelector('.equals');
const display = document.querySelector('.display');
const allClear = document.querySelector('.clear');
const backSpace = document.querySelector('.backspace');


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
        if(this.previusValue !== ''){
            this.compute();
        }
        this.operation = operation
        this.previusValue = this.currentValue + this.operation
        this.currentValue = '';
    }

    compute(){
    
    let computer;
    let valueOfOperator = this.operation

    let curr = parseFloat(this.currentValue)
    let prev = parseFloat(this.previusValue)

    if (curr == NaN || prev == NaN) return;

    switch(valueOfOperator){

        case '+':
            computer = curr + prev;
            break;
        case '-':
            computer = prev - curr;
            break
        case '*':
            computer = prev * curr;
            break;
        case '/':
            computer = prev / curr;
            break;
        default:
            return;
    }
    this.previusValue = ''
    this.operation = undefined
    this. currentValue = computer
    }

    delete(){

        if(!this.currentValue) return;
        
    let arroFValues = this.currentValue.slice(0, -1)
    
    this.currentValue = arroFValues
    
    }
    
    
    
    
    
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

equalsButton.addEventListener('click', ()=>{    

    calculator.compute()
    calculator.updateDisplay()

})

allClear.addEventListener('click', ()=>{    

    calculator.clearAll()
    calculator.updateDisplay()

})

backSpace.addEventListener('click', ()=>{    

    calculator.delete()
    calculator.updateDisplay()

})