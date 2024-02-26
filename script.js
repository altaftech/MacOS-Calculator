const display = document.getElementById("display");
const tape = document.getElementById("tape");

let currentInput = "0";
let operator = "";
let firstOperand = "";
let tapeContent = "";

function clearTape() {
    tapeContent = "";
    tape.innerHTML = "";
}

function clearDisplay() {
    currentInput = "0";
    operator = "";
    firstOperand = "";
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = "0";
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = currentInput;

    switch (operator) {
        case "+":
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case "-":
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case "*":
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case "/":
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case "^":
            result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        default:
            return;
    }

    tapeContent += `${firstOperand} ${operator} ${secondOperand} = ${result}<br>`;

    currentInput = result.toString();
    operator = "";
    firstOperand = "";
    updateDisplay();
    updateTape();
}

function updateDisplay() {
    display.textContent = currentInput;
}
function updateTape() {
    tape.innerHTML = tapeContent;
    tape.scrollTop = tape.scrollHeight;
}

function changePositivity() {
    const currentValue = parseFloat(currentInput);
    if (!isNaN(currentValue)) {
        currentInput = (currentValue * -1).toString();
        document.getElementById("display").value = currentInput;
    }
}

function appendPercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

$(document).ready(function () {
    $("#red").click(function () {
        $(".container").hide();
    });
    $("#green").click(function () {
        $(".container").show();
    });
});
$(document).ready(function () {
    $(".container #red").click(function () {
        $(".container").hide();
    });
});
function playSound() {
    var audio = document.getElementById("clicks");
    audio.play();
}
