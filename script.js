const calcDisplay = document.querySelector("#calcDisplay");
const clearBtn = document.querySelector("#clearBtn");
const plusMinus = document.querySelector("#plusMinus");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
let operator = "";
let numbers = [undefined, undefined];
let isTotal = false;

zero.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    isTotal
  ) {
    calcDisplay.value = "";
    isTotal =false;
  }
  calcDisplay.value += "0";
});

one.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "1";
});

two.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "2";
});

three.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "3";
});

four.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "4";
});

five.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "5";
});

six.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "6";
});

seven.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "7";
});

eight.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "8";
});

nine.addEventListener("click", () => {
  if (
    calcDisplay.value === "+" ||
    calcDisplay.value === "-" ||
    calcDisplay.value === "/" ||
    calcDisplay.value === "*" ||
    operator === "equals"
  ) {
    calcDisplay.value = "";
  }
  calcDisplay.value += "9";
});

clearBtn.addEventListener("click", () => {
  calcDisplay.value = "";
  numbers[0] = undefined;
  numbers[1] = undefined;
  operator = undefined;
});

plus.addEventListener("click", () => {
  if (operator === "addition") {
    let sum = numbers[0] + Number(calcDisplay.value);
    numbers[0] = sum;
    calcDisplay.value = "+";
  } else if (operator === "subtraction") {
    let diff = numbers[0] - Number(calcDisplay.value);
    numbers[0] = diff;
    calcDisplay.value = "+";
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
});

minus.addEventListener("click", () => {
  if (operator === "addition") {
    let sum = numbers[0] + Number(calcDisplay.value);
    numbers[0] = sum;
    calcDisplay.value = "-";
  } else if (operator === "subtraction") {
    let diff = numbers[0] - Number(calcDisplay.value);
    numbers[0] = diff;
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
});
equal.addEventListener("click", () => {
  numbers[1] = Number(calcDisplay.value);
  if (operator === "addition") {
    calcDisplay.value = numbers[0] + numbers[1];
    numbers[0] = undefined;
    numbers[1] = undefined;
  }

  if (operator === "subtraction") {
    calcDisplay.value = numbers[0] - numbers[1];
    numbers[0] = undefined;
    numbers[1] = undefined;
  }

  operator = "";
  isTotal = true;
});
