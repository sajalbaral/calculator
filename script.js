let firstNum = '';
let secondNum = '';
let currentOperator = null;
let updateScreen = false;

const numberButtons = document.querySelectorAll('#data-number');
const operatorButtons = document.querySelectorAll('#data-operator');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const pointButton = document.getElementById('point-btn');
const equalsButton = document.getElementById('equals-btn');
const lastCalc = document.getElementById('last-calc');
const currentCalc = document.getElementById('current-calc');

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleted);
equalsButton.addEventListener('click', evaluate);

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if(currentCalc.textContent === '0' || updateScreen) update()
    currentCalc.innerText += number;
}
 
function clear() {
    firstNum = ''
    secondNum = ''
    currentOperator = null
    currentCalc.textContent = ''
    lastCalc.textContent = ''
}

function deleted() {
    currentCalc.textContent = 
    currentCalc
        .textContent
        .toString()
        .slice(0,-1);
}

function evaluate() {
    if(currentOperator === null || updateScreen) return
    secondNum = currentCalc.textContent
    currentCalc.textContent = operate(currentOperator, firstNum, secondNum)
    lastCalc.textContent = `${firstNum} ${currentOperator} ${secondNum} =`
    currentOperator = null
}

function update() {
    currentCalc.textContent = ''
    updateScreen = false
}

function setOperation(operator) {
    if(currentOperator !== null) evaluate()
    firstNum = currentCalc.textContent
    currentOperator = operator
    lastCalc.textContent = `${firstNum} ${currentOperator}`
    updateScreen = true
}

function operate(operator, a , b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            if(b == 0) {
                alert('Cannot divide by 0!')
                clear()
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