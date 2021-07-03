let number1 = '';
let number2 = '';
let operator;

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, number1, number2){
    switch(operator){
        case 'add':
            return add(number1,number2);
            break;
        case 'subtract':
            return subtract(number1,number2);
            break;
        case 'multiply':
            return multiply(number1,number2);
            break;
        case 'divide':
            return divide(number1,number2);
            break;
        default:
            return "ERROR";
            break;
    }
}

function clearVar(){
    number1 = '';
    number2 = '';
    operator = '';
}

const numbers = document.querySelectorAll('.numbers');
const h1 = document.querySelector('h1');
const operators = document.querySelectorAll('.operators')
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

for(let i=0; i<=9; i++){
    const number = document.querySelector(`#number${i}`);
    number.setAttribute('style', `grid-area: number${i}`);
}

numbers.forEach(number => number.addEventListener('click', function(e){
    if(!operator){
        number1 += e.target.textContent;
        h1.textContent = number1;
    }
    else {
        number2 += e.target.textContent;
        h1.textContent += e.target.textContent;
    }
}))

operators.forEach(op => op.addEventListener('click', function(e){
    operator = e.target.id;
    h1.textContent += e.target.textContent;
}))

clear.addEventListener('click', () => {
    clearVar();
    h1.textContent = 'Display';
})

equals.addEventListener('click', () => {
    let answer = operate(operator, parseInt(number1), parseInt(number2));
    clearVar();
    number1 = answer;
    h1.textContent = answer;
})