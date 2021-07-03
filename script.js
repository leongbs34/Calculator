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
        case '+':
            return add(number1,number2);
            break;
        case '-':
            return subtract(number1,number2);
            break;
        case '*':
            return multiply(number1,number2);
            break;
        case '/':
            return divide(number1,number2);
            break;
        default:
            return "ERROR";
            break;
    }
}

for(let i=0; i<=9; i++){
    const number = document.querySelector(`#number${i}`);
    number.setAttribute('style', `grid-area: number${i}`);
}

let number1 = '';
let number2 = '';
const numbers = document.querySelectorAll('.numbers');
const h1 = document.querySelector('h1');
numbers.forEach(number => number.addEventListener('click', function(e){
    number1 += e.target.textContent;
    h1.textContent = number1;
}))