let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function calculate() {
    try {
        expression = eval(expression);
        display.innerText = expression;
    } catch (error) {
        display.innerText = 'Error';
    }
}
