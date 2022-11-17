const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b) {
    return a / b;
};

const operate = function(a,b, operator) {
    return operator(a,b);
};

// add numbers to display, clear button
let displayValue;
let currentNumber = document.querySelector('.current-number');
const buttons = document.querySelectorAll('#btn');
const clearBtn = document.getElementById('clear');
buttons.forEach(btn => btn.addEventListener('click', () => displayValue = currentNumber.innerHTML += btn.value));
clearBtn.addEventListener('click', () => displayValue = currentNumber.innerHTML = '');

// store value of display when an operator is chosen 
let firstValue;
const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', () => firstValue = displayValue));

// selecting operators 
const division = document.querySelector('.divide');
const multiplication = document.querySelector('.multiply');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');

division.addEventListener('click', divide());
multiplication.addEventListener('click', multiply());
addition.addEventListener('click', add());
subtraction.addEventListener('click', subtract());



