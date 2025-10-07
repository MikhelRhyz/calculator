document.querySelector("#eight");
const nine = document.querySelector("#nine");
const point = document.querySelector("#point");
let operator = "";
let numbers = [undefined, undefined];
let isTotal = false;
let isFresh = false;
calcDisplay.value = "0";
document.addEventListener("keydown", (event) => {
  let key = event.key;
  if (key === ".") {
    putPoint();
  }
  if (key === "0") {
    putZero();
  }
  if (key === "1") {
    putOne();
  }
  if (key === "2") {
    putTwo();
  }
  if (key === "3") {
    putThree();
  }
  if (key === "4") {
    putFour();
  }
  if (key === "5") {
    putFive();
  }
  if (key === "6") {
    putSix();
  }
  if (key === "7") {
    putSeven();
  }
  if (key === "8") {
    putEight();
  }
  if (key === "9") {
    putNine();
  }
  if (key === "Escape") {
    clearDisplay();
  }
  if (key === "+") {
    addNumber();
  }
  if (key === "-") {
    subtractNumbers();
  }
  if (key === "*") {
    multiplyNumbers();
  }
  if (key === "/") {
    divideNumbers();
  }
  if (key === "Enter") {
    event.preventDefault();
    totalNumbers();
  }
  if (key === "%") {
    percentage();
  }
});
point.addEventListener("click", putPoint);
function putPoint() {
  if (!calcDisplay.value.includes(".")) {
    if (
      calcDisplay.value === "+" ||
      calcDisplay.value === "-" ||
      calcDisplay.value === "/" ||
      calcDisplay.value === "*"
    ) {
      calcDisplay.value = "0";
    }
    calcDisplay.value += ".";
    isFresh = false;
  }
}
function putZero() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "0";
}
zero.addEventListener("click", putZero);
one.addEventListener("click", putOne);
function putOne() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "1";
}
two.addEventListener("click", putTwo);
function putTwo() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "2";
}
three.addEventListener("click", putThree);
function putThree() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "3";
}
four.addEventListener("click", putFour);
function putFour() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "4";
}
five.addEventListener("click", putFive);
function putFive() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "5";
}
six.addEventListener("click", putSix);
function putSix() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "6";
}
seven.addEventListener("click", putSeven);
function putSeven() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "7";
}
eight.addEventListener("click", putEight);
function putEight() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "8";
}
nine.addEventListener("click", putNine);
function putNine() {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals" ||
    isTotal ||
    isFresh
  ) {
    calcDisplay.value = "";
    if (isTotal) {
      numbers[0] = undefined;
    }
    isTotal = false;
    isFresh = false;
  }
  calcDisplay.value += "9";
}
clearBtn.addEventListener("click", clearDisplay);
function clearDisplay() {
  calcDisplay.value = "0";
  numbers[0] = undefined;
  numbers[1] = undefined;
  operator = undefined;
}
plus.addEventListener("click", addNumber);
function addNumber() {
  if (isTotal) {
    isTotal = false;
  }
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*"
  ) {
    operator = "";
    if (numbers[0] != undefined) {
      calcDisplay.value = "+";
    }
  } else if (operator === "division") {
    let quo = numbers[0] / Number(calcDisplay.value);
    numbers[0] = quo;
    calcDisplay.value = "+";
  } else if (operator === "subtraction") {
    let diff = numbers[0] - Number(calcDisplay.value);
    numbers[0] = diff;
    calcDisplay.value = "+";
  } else if (operator === "multiplication") {
    let prod = numbers[0] * Number(calcDisplay.value);
    numbers[0] = prod;
    calcDisplay.value = "*";
  } else {
    numbers[1] = Number(calcDisplay.value);
    if (numbers[0] === undefined) {
      numbers[0] = numbers[1];
    } else {
      numbers[0] = numbers[0] + numbers[1];
    }
    numbers[1] = 0;
    calcDisplay.value = "+";
  }
  operator = "addition";
}
minus.addEventListener("click", subtractNumbers);
function subtractNumbers() {
  if (isTotal) {
    isTotal = false;
  }
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*"
  ) {
    operator = "";
    if (numbers[0] != undefined) {
      calcDisplay.value = "-";
    }
  } else if (operator === "addition") {
    let sum = numbers[0] + Number(calcDisplay.value);
    numbers[0] = sum;
    calcDisplay.value = "-";
  } else if (operator === "division") {
    let quo = numbers[0] / Number(calcDisplay.value);
    numbers[0] = quo;
    calcDisplay.value = "-";
  } else if (operator === "multiplication") {
    let prod = numbers[0] * Number(calcDisplay.value);
    numbers[0] = prod;
    calcDisplay.value = "-";
  } else {
    numbers[1] = Number(calcDisplay.value);
    if (numbers[0] === undefined) {
      numbers[0] = numbers[1];
    } else {
      numbers[0] = numbers[0] - numbers[1];
    }
    numbers[1] = 0;
    calcDisplay.value = "-";
  }
  operator = "subtraction";
}
multiply.addEventListener("click", multiplyNumbers);
function multiplyNumbers() {
  if (isTotal) {
    isTotal = false;
  }
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*"
  ) {
    operator = "";
    if (numbers[0] != undefined) {
      calcDisplay.value = "*";
    }
  } else if (operator === "addition") {
    let sum = numbers[0] + Number(calcDisplay.value);
    numbers[0] = sum;
    calcDisplay.value = "*";
  } else if (operator === "subtraction") {
    let diff = numbers[0] - Number(calcDisplay.value);
    numbers[0] = diff;
    calcDisplay.value = "*";
  } else if (operator === "division") {
    let quo = numbers[0] / Number(calcDisplay.value);
    numbers[0] = quo;
    calcDisplay.value = "*";
  } else {
    numbers[1] = Number(calcDisplay.value);
    if (numbers[0] === undefined) {
      numbers[0] = numbers[1];
    } else {
      numbers[0] = numbers[0] * numbers[1];
    }
    numbers[1] = 0;
    calcDisplay.value = "*";
  }
  operator = "multiplication";
}
divide.addEventListener("click", divideNumbers);
function divideNumbers() {
  if (isTotal) {
    isTotal = false;
  }
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*"
  ) {
    operator = "";
    if (numbers[0] != undefined) {
      calcDisplay.value = "/";
    }
  } else if (operator === "addition") {
    let sum = numbers[0] + Number(calcDisplay.value);
    numbers[0] = sum;
    calcDisplay.value = "/";
  } else if (operator === "subtraction") {
    let diff = numbers[0] - Number(calcDisplay.value);
    numbers[0] = diff;
    calcDisplay.value = "/";
  } else if (operator === "multiplication") {
    let prod = numbers[0] * Number(calcDisplay.value);
    numbers[0] = prod;
    calcDisplay.value = "/";
  } else {
    numbers[1] = Number(calcDisplay.value);
    if (numbers[0] === undefined) {
      numbers[0] = numbers[1];
    } else {
      numbers[0] = numbers[0] / numbers[1];
    }
    numbers[1] = 0;
    calcDisplay.value = "/";
  }
  operator = "division";
}
equal.addEventListener("click", totalNumbers);

function totalNumbers() {
  numbers[1] = Number(calcDisplay.value); // second input
  let result;

  if (operator === "addition") {
    result = numbers[0] + numbers[1];
  } else if (operator === "subtraction") {
    result = numbers[0] - numbers[1];
  } else if (operator === "multiplication") {
    result = numbers[0] * numbers[1];
  } else if (operator === "division") {
    if (numbers[1] === 0) {
      calcDisplay.value = "Cannot divide by 0";
      operator = "";
      numbers[0] = undefined;
      numbers[1] = undefined;
      isFresh = true;
      return;
    }
    result = numbers[0] / numbers[1];
  } else {
    // no operator → just return current value
    result = numbers[1];
    isTotal = false;
    calcDisplay.value = result;
    numbers[1] = undefined;
    isFresh = true;
    return;
  }

  calcDisplay.value = result;

  numbers[0] = undefined;
  numbers[1] = undefined;
  operator = "";
  isTotal = true;
}

plusMinus.addEventListener("click", negateNumber);
function negateNumber() {
  let result = Number(calcDisplay.value) * -1;
  calcDisplay.value = result;
}
percent.addEventListener("click", percentage);
function percentage() {
  if (numbers[0] === undefined || numbers[0] === 0) {
    calcDisplay.value = 0;
  } else {
    let point = calcDisplay.value / 100;
    calcDisplay.value = numbers[0] * point;
  }
}
