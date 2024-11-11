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

function calculate(num1, num2, operation) {
  let result = operation(num1, num2);
  return result;
}

keySeven.addEventListener("click", () => {
  screen.innerHTML += "<h2>7</h2>";
  if (num1 === 0) {
    num1 = parseInt(7);
  } else {
    num2 = parseInt(screen.innerHTML);
  }
});
keyEight.addEventListener("click", () => {
  screen.innerHTML += "<h2>8</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyNine.addEventListener("click", () => {
  screen.innerHTML += "<h2>9</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyDiv.addEventListener("click", () => {
  screen.innerHTML += "<h2>÷</h2>";
  operation = divide;
});
keyFour.addEventListener("click", () => {
  screen.innerHTML += "<h2>4</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyFive.addEventListener("click", () => {
  screen.innerHTML += "<h2>5</h2>";
  num1 = parseInt(screen.innerHTML);
});
keySix.addEventListener("click", () => {
  screen.innerHTML += "<h2>6</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyMultiply.addEventListener("click", () => {
  screen.innerHTML += "<h2>X</h2>";
  operation = multiply;
});
keyOne.addEventListener("click", () => {
  screen.innerHTML += "<h2>1</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyTwo.addEventListener("click", () => {
  screen.innerHTML += "<h2>2</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyThree.addEventListener("click", () => {
  screen.innerHTML += "<h2>3</h2>";
  num1 = parseInt(screen.innerHTML);
});
keySubtract.addEventListener("click", () => {
  screen.innerHTML += "<h2>-</h2>";
  operation = subtract;
});
keyZero.addEventListener("click", () => {
  screen.innerHTML += "<h2>0</h2>";
  num1 = parseInt(screen.innerHTML);
});
keyDecimal.addEventListener("click", () => {
  screen.innerHTML += "<h2>.</h2>";
});
keyAdd.addEventListener("click", () => {
  screen.innerHTML += "<h2>+</h2>";
  operation = add;
});
keyEqual.addEventListener("click", () => {
  screen.innerHTML = `<h2>${calculate(num1, num2, operation)}</h2>`;
  console.log(calculate(num1, num2, operation));
});
