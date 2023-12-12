let firstNum = 0;
let secondNum = 0;
let operator = '';

const numberButtons = document.querySelectorAll('#data-number');
const operatorButtons = document.querySelectorAll('#data-operator');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const pointButton = document.getElementById('point-btn');
const equalsButton = document.getElementById('equals-btn');
const calculation = document.getElementsByClassName('calculation');
const result = document.getElementsByClassName('.result');

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '÷':
            if(b == 0) {
                alert('Cannot divide by 0!')
            } else {
                return divide(a,b);
            }
        default: 
            return null;
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}