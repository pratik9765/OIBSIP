var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculate);
}

function calculate() {
    var value = this.getAttribute('data-value');
    var text = display.innerHTML.trim();
    // console.log(value);

    if (value == '+' || value == '-' || value == '*' || value == '/') {
        operand1 = parseFloat(text);
        display.innerHTML = " ";
        operator = value;
    } else if (value == 'ac') {
        display.innerHTML = " ";
    } else if (value == 'sign') {
        var existingText = text;
        existingText = -1 * existingText;
        display.innerHTML = existingText;

    } else if (value == '%') {
        var existingText = text;
        existingText = existingText / 100;
        display.innerHTML = existingText;
    } else if (value == '.') {
        if (!text.includes('.')) {
            var existingText = text;
            display.innerHTML = existingText + '.';

        }
    } else if (value == '=') {
        operand2 = parseFloat(text);
        var result = eval(operand1 + " " + operator + " " + operand2);
        console.log(result);
        display.innerHTML = result;
        operand1 = result;
        operand2 = null;
        operator = null;


    } else {
        display.innerHTML += value;
    }


}