
// add numbers to display, clear button
let displayValue;
let currentNumber = document.querySelector('.current-number');
let resultingNumber = document.querySelector('.resulting-number');


const buttons = document.querySelectorAll('#btn');
const clearBtn = document.getElementById('clear'); // might need to do array.from on these
const deleteBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');


buttons.forEach(btn => btn.addEventListener('click', () => currentNumber.textContent += btn.value));

clearBtn.addEventListener('click', clear);


// store value of display when an operator is chosen 
let firstValue;
const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', () => firstValue = displayValue));

// selecting operators 
const division = document.querySelector('.divide');
const multiplication = document.querySelector('.multiply');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');

division.addEventListener('click', divide);
multiplication.addEventListener('click', multiply);
addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract)


function clear() {
    currentNumber.textContent = '';
    resultingNumber.textContent = '';
};

function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate(a,b, operator) {
    return operator(a,b);
};
