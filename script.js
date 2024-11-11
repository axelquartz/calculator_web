// Screen container
let screen = document.getElementById("screen");

// Buttons mapping
const keySeven = document.querySelector(".seven");
const keyEight = document.querySelector(".eight");
const keyNine = document.querySelector(".nine");
const keyDiv = document.querySelector(".div");
const keyFour = document.querySelector(".four");
const keyFive = document.querySelector(".five");
const keySix = document.querySelector(".six");
const keyMultiply = document.querySelector(".multiply");
const keyOne = document.querySelector(".one");
const keyTwo = document.querySelector(".two");
const keyThree = document.querySelector(".three");
const keySubtract = document.querySelector(".subtract");
const keyZero = document.querySelector(".zero");
const keyDecimal = document.querySelector(".decimal");
const keyAdd = document.querySelector(".add");
const keyEqual = document.querySelector(".equal");

// Array of numbers expected to be operated
let num1 = 0;
let num2 = 0;
let operation;

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let acomulated;

function calculate(num1, num2, operation) {
  let result = operation(num1, num2);
  return result;
}

keySeven.addEventListener("click", () => {
  screen.innerHTML += "<h2>7</h2>";
  if (operation == undefined) {
    num1 += "7";
  } else if (acomulated == undefined) {
    num2 += "7";
  }
});
keyEight.addEventListener("click", () => {
  screen.innerHTML += "<h2>8</h2>";
  if (operation == undefined) {
    num1 += "8";
  } else {
    num2 += "8";
  }
});
keyNine.addEventListener("click", () => {
  screen.innerHTML += "<h2>9</h2>";
  if (operation == undefined) {
    num1 += "9";
  } else {
    num2 += "9";
  }
});
keyDiv.addEventListener("click", () => {
  screen.innerHTML += "<h2>÷</h2>";
  operation = divide;
});
keyFour.addEventListener("click", () => {
  screen.innerHTML += "<h2>4</h2>";
  if (operation == undefined) {
    num1 += "4";
  } else {
    num2 += "4";
  }
});
keyFive.addEventListener("click", () => {
  screen.innerHTML += "<h2>5</h2>";
  if (operation == undefined) {
    num1 += "5";
  } else {
    num2 += "5";
  }
});
keySix.addEventListener("click", () => {
  screen.innerHTML += "<h2>6</h2>";
  if (operation == undefined) {
    num1 += "6";
  } else {
    num2 += "6";
  }
});
keyMultiply.addEventListener("click", () => {
  screen.innerHTML += "<h2>X</h2>";
  operation = multiply;
});
keyOne.addEventListener("click", () => {
  screen.innerHTML += "<h2>1</h2>";
  if (operation == undefined) {
    num1 += "1";
  } else {
    num2 += "1";
  }
});
keyTwo.addEventListener("click", () => {
  screen.innerHTML += "<h2>2</h2>";
  if (operation == undefined) {
    num1 += "2";
  } else {
    num2 += "2";
  }
});
keyThree.addEventListener("click", () => {
  screen.innerHTML += "<h2>3</h2>";
  if (operation == undefined) {
    num1 += "3";
  } else {
    num2 += "3";
  }
});
keySubtract.addEventListener("click", () => {
  screen.innerHTML += "<h2>-</h2>";
  operation = subtract;
});
keyZero.addEventListener("click", () => {
  screen.innerHTML += "<h2>0</h2>";
  if (operation == undefined) {
    num1 += "0";
  } else {
    num2 += "0";
  }
});
keyDecimal.addEventListener("click", () => {
  screen.innerHTML += "<h2>.</h2>";
});
keyAdd.addEventListener("click", () => {
  screen.innerHTML += "<h2>+</h2>";
  num1 = parseInt(num1);
  operation = add;
});
keyEqual.addEventListener("click", () => {
  num2 = parseInt(num2);
  screen.innerHTML = `<h2>${calculate(num1, num2, operation)}</h2>`;
  console.log(calculate(num1, num2, operation));
  acomulated = parseInt(screen.innerText);
  num1 = acomulated;
  num2 = 0;
  operation = undefined;
});
