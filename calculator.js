

const operations = {
        sum: function(a , b){ return a + b},
        sub: function(a, b){return a - b},
        mult: function(a, b){return a * b},
        div: function(a, b){return a/b}

};



//selectors

let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.display');


//listeners 
let newVAlue = [];

buttons.forEach(button => {

    button.addEventListener('click', ()=>{
        
        newVAlue.push(button.value).join('');

        display.innerText = newVAlue;
        
 
    
    });
    
});