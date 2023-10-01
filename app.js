function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(2);
}

function operate(a, b, operator) {
    switch (operator) {
        case "plus":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            alert("Invalid operator!");
            break;
    }
}

let num1 = null;
let num2 = null;
let operator = "";

document.querySelector("#clear").addEventListener("click", () => {
    result.textContent = 0;
    operation.textContent = "";
    num1 = null;
    num2 = null;
    operator = "";
});

let result = document.querySelector(".result");
let operation = document.querySelector(".operation");

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        result.textContent = +result.textContent * 10 + +digit.textContent;
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((x) => {
    x.addEventListener("click", () => {
        if (operator !== "") {
            num1 = operate(num1, +result.textContent, operator);
        }
        else {
            num1 = +result.textContent;
        }
        operation.textContent = `${num1} `;
        operator = x.id;
        switch (operator) {
            case "plus":
                operation.textContent += "+";
                break;
            case "subtract":
                operation.textContent += "-";
                break;
            case "multiply":
                operation.textContent += "*";
                break;
            case "divide":
                operation.textContent += "/";
                break;
            default:
                break;
        }
        result.textContent = "0";
    });
});

document.querySelector("#equals").addEventListener("click", () => {
    if (result.textContent !== "" ) {
        num1 = operate(num1, +result.textContent, operator);
    }
    result.textContent = num1;
    operation.textContent = "";
    num1 = null;
    num2 = null;
    operator = "";
});

