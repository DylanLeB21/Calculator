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

const appendNumber = function() {
    const currentNumber = document.querySelector('.current-number');
    const buttons = document.querySelectorAll('#btn');

    };


    const currentNumber = document.querySelector('.current-number');
    const buttons = document.querySelectorAll('#btn');
    buttons.forEach(btn => btn.addEventListener('click', () => currentNumber.innerHTML = btn.value));