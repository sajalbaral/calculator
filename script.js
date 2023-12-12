let firstNum = 0;
let secondNum = 0;
let operator = '';

function operate(a, b, opp) {
    a = Number(a);
    b = Number(b);

    switch(opp) {
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