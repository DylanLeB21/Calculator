
// add numbers to display, clear button
let equationResult;
let firstValue;
let secondValue;
let operator;
let currentNumber = document.querySelector('.current-number');
let resultingNumber = document.querySelector('.resulting-number');


const numbers = document.querySelectorAll('#btn');
const clearBtn = document.getElementById('clear'); 
const deleteBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');
const dot = document.getElementById('dot');
const operators = document.querySelectorAll('.operator');


numbers.forEach(num => {
    num.addEventListener('click', () => {
    firstValue = currentNumber.textContent += num.value;
})});


clearBtn.addEventListener('click', clear);

operators.forEach(op => {
    op.addEventListener('click', e => {
        operator = e.target.innerText;
        if(operator === '÷') {
            
        } else if (operator === '*') {

        } else if (operator === '+') {

        } else (operator === '-') {

        };
        // If equals operator, perform operation
    });
});

// store value of display when an operator is chosen 
// operators.forEach(op => op.addEventListener('click', chooseOperator));

// selecting operators 
const division = document.querySelector('.divide');
const multiplication = document.querySelector('.multiply');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');

// division.addEventListener('click', divide);
// multiplication.addEventListener('click', multiply);
// addition.addEventListener('click', add);                // has to read values somehow
// subtraction.addEventListener('click', subtract)


// function chooseOperator() {
//     firstValue = currentNumber;

// };



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
