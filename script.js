
// add numbers to display, clear button
let equationResult;
let firstValue = '';
let secondValue = '';
let operator = '';
let currentNumber = document.querySelector('.current-number');
let resultingNumber = document.querySelector('.resulting-number');


const numbers = document.querySelectorAll('#btn');
const clearBtn = document.getElementById('clear'); 
const deleteBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');
const dot = document.getElementById('dot');
const operators = document.querySelectorAll('.operator');

// selecting operators 
// const division = document.querySelector('.divide');
// const multiplication = document.querySelector('.multiply');
// const addition = document.querySelector('.add');
// const subtraction = document.querySelector('.subtract');

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if(operator === '') { // read first number if no operator set
            // currentNumber.textContent += e.target.innerText; //numbers not being displayed
            firstValue += e.target.innerText;
        } else { // read 2nd number
            // resultingNumber.textContent = firstValue;
            // currentNumber.textContent = '';
            // currentNumber.textContent += e.target.innerText;
            secondValue += e.target.innerText;
        }
    })
});

operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.innerText !== '=') {
            operator = e.target.innerText;

            console.log(firstValue);
            console.log(operator);
        } else {
            console.log(secondValue);
            alert('test')

            switch (operator) {
                case '+':
                    // console.log(operate(firstValue, secondValue, operator));
                    console.log(parseInt(firstValue) + parseInt(secondValue));
                    break;

                case '-':
                    equationResult = parseInt(firstValue) - parseInt(secondValue);
                    break;

                case '*':
                    equationResult = parseInt(firstValue) * parseInt(secondValue);
                    break;

                case '??':
                    equationResult = parseInt(firstValue) / parseInt(secondValue);
                    break;
                    
                default:
                    break;
            };
        };
    });
});
// equalsBtn.addEventListener('click', e => {
//     console.log(operate(parseInt(firstValue), parseInt(secondValue), operator));
// })
clearBtn.addEventListener('click', clear);

// operate(firstValue,secondValue,operator);

// store value of display when an operator is chosen 
// operators.forEach(op => op.addEventListener('click', chooseOperator));


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
