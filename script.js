let calcArr = [];

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
        case 'x':
            return multiply(number1,number2);
            break;
        case '÷':
            return divide(number1,number2);
            break;
        default:
            return "ERROR";
            break;
    }
}


const isOperator = (operator) => (operator == 'x') || (operator == '+') || (operator == '-') || (operator == '÷');

const numbers = document.querySelectorAll('.numbers');
const h1 = document.querySelector('h1');
const operators = document.querySelectorAll('.operators')
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const equals = document.querySelector('#equals');

for(let i=0; i<=9; i++){
    const number = document.querySelector(`#number${i}`);
    number.setAttribute('style', `grid-area: number${i}`);
}

numbers.forEach(number => number.addEventListener('click', function(e){
    let no = e.target.textContent;
    calcArr.push(no);
    h1.textContent = calcArr.join('');
}))

operators.forEach(op => op.addEventListener('click', function(e){
    let operator = e.target.textContent;
    calcArr.push(operator);
    h1.textContent = calcArr.join('');
}))

del.addEventListener('click', () => {
    calcArr.pop();
    h1.textContent = calcArr.join('');
})

clear.addEventListener('click', () => {
    calcArr = [];
    h1.textContent = 'Display';
})

equals.addEventListener('click', () => {
    let indexOp, number1, number2, answer;

    while(calcArr.length > 1){
        indexOp = calcArr.findIndex(isOperator);
        number1 = calcArr.splice(0, indexOp);
        let operator = calcArr.splice(0, 1);
        if(calcArr.findIndex(isOperator) == -1){
            number2 = calcArr.splice(0);
        }
        else{
            indexOp = calcArr.findIndex(isOperator)
            number2 = calcArr.splice(0, indexOp);
        }
        answer = operate(operator[0], parseInt(number1.join('')), parseInt(number2.join('')));
        calcArr.unshift(answer);
    }

    if(answer == 'ERROR'|| Number.isNaN(answer)){ 
        calcArr = [];
        h1.textContent = 'Syntax ERROR';
    }
    else if(answer == Infinity){
        calcArr = [];
        h1.textContent = 'Math ERROR';
    }
    else if(calcArr.length == 0) h1.textContent = 'Display';
    else{
        h1.textContent = calcArr.join('');
    }

})