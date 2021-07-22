function operate(operator, n1, n2) {
  switch (operator) {
    case "add":
      return n1 + n2;

    case "subtract":
      return n1 - n2;

    case "multiply":
      return n1 * n2;

    case "divide":
      return n1 / n2;

    default:
      return;
  }
}

function updateDisplay(num) {
  const display = document.querySelector("#display-text");
  if (num) {
    currentNumber += num;
    display.textContent = currentNumber;
  } else {
    currentNumber = "";
    display.textContent = "";
  }
}

function reset() {
  updateDisplay();
  previousNumber = "";
}

function evaluateBtn(btn) {
  const btnData = btn.target.attributes.data.textContent;
  // Only operation buttons have a class attribute of "operation"
  if (btn.target.attributes.class) {
    if (operation) {
      const result = operate(operation, Number(previousNumber), Number(currentNumber));
      updateDisplay();
      updateDisplay(result);
    }
    if (btnData != "equals") {
      operation = btnData;
      operationEval = true;
    } else {
      operation = undefined;
    }
    previousNumber = currentNumber;
  } else {
    if (operationEval) {
      updateDisplay();
    }
    updateDisplay(btnData);
    operationEval = false;
  }
}

let previousNumber = "";
let currentNumber = "";
let operation;
// Boolean used to clear the display when an operation button was clicked
let operationEval;

const buttons = Array.from(
  document.querySelector(".buttons").querySelectorAll("button")
);
buttons.forEach((btn) => {
  btn.addEventListener("click", evaluateBtn);
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", reset);
