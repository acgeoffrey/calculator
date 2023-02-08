"use strict";
let firstNumber = "";
let secondNumber = "";
let operator;
let isFirstNumber = true;
let result;
let tempResult;
const display = document.querySelector("#input-number");
const displayTextEl = document.querySelector(".display-text");
let displayText = " ";
let isResultBtn = false;
function tempResultFunction() {
  tempResult = eval(firstNumber + " " + operator + " " + secondNumber);
  console.log("FirstNumber " + firstNumber, "SecondNumber " + secondNumber);
  firstNumber = tempResult;
  secondNumber = "";
  console.log("FirstNumber " + firstNumber, "SecondNumber " + secondNumber);
}

// NUMBERS
function one() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "1";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "1";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "1";
  displayTextEl.innerText = displayText;
}
document.querySelector(".one").addEventListener("click", one);

function two() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "2";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "2";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "2";
  displayTextEl.innerText = displayText;
}
document.querySelector(".two").addEventListener("click", two);

function three() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "3";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "3";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "3";
  displayTextEl.innerText = displayText;
}
document.querySelector(".three").addEventListener("click", three);

function four() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "4";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "4";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "4";
  displayTextEl.innerText = displayText;
}
document.querySelector(".four").addEventListener("click", four);

function five() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "5";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "5";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "5";
  displayTextEl.innerText = displayText;
}
document.querySelector(".five").addEventListener("click", five);

function six() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "6";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "6";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "6";
  displayTextEl.innerText = displayText;
}
document.querySelector(".six").addEventListener("click", six);

function seven() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "7";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "7";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "7";
  displayTextEl.innerText = displayText;
}
document.querySelector(".seven").addEventListener("click", seven);

function eight() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "8";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "8";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "8";
  displayTextEl.innerText = displayText;
}
document.querySelector(".eight").addEventListener("click", eight);

function nine() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "9";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "9";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "9";
  displayTextEl.innerText = displayText;
}
document.querySelector(".nine").addEventListener("click", nine);

function zero() {
  if (isFirstNumber) {
    firstNumber = firstNumber + "0";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "0";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "0";
  displayTextEl.innerText = displayText;
}
document.querySelector(".zero").addEventListener("click", zero);

// OPERATORS
function add() {
  if (!isFirstNumber && !isResultBtn) {
    tempResultFunction();
  }
  operator = "+";
  isFirstNumber = false;
  isResultBtn = false;

  displayText = displayText + " " + operator;
  displayTextEl.innerText = displayText;
}
document.querySelector(".add").addEventListener("click", add);

function subtract() {
  if (!isFirstNumber && !isResultBtn) {
    tempResultFunction();
  }
  operator = "-";
  isFirstNumber = false;
  isResultBtn = false;

  displayText = displayText + " " + operator;
  displayTextEl.innerText = displayText;
}
document.querySelector(".subtract").addEventListener("click", subtract);

function multiply() {
  if (!isFirstNumber && !isResultBtn) {
    tempResultFunction();
  }
  operator = "*";
  isFirstNumber = false;
  isResultBtn = false;

  displayText = displayText + " " + operator;
  displayTextEl.innerText = displayText;
}
document.querySelector(".multiply").addEventListener("click", multiply);

function divide() {
  if (!isFirstNumber && !isResultBtn) {
    tempResultFunction();
  }
  operator = "/";
  isFirstNumber = false;
  isResultBtn = false;

  displayText = displayText + " " + operator;
  displayTextEl.innerText = displayText;
}
document.querySelector(".divide").addEventListener("click", divide);

// DOT
function dot() {
  if (isFirstNumber) {
    firstNumber = firstNumber + ".";
    display.value = firstNumber;
  } else {
    secondNumber = secondNumber + ".";
    display.value = secondNumber;
  }
  // display.value = "0";
  displayText = displayText + " " + ".";
  displayTextEl.innerText = displayText;
}
document.querySelector(".dot").addEventListener("click", dot);

// RESULT
function resultFunction() {
  if (operator === "/" && secondNumber === "0") {
    displayText = "Error";
    displayTextEl.innerText = displayText;
    return;
  }
  // console.log("FirstNumber" + firstNumber);
  // console.log("Second Number" + secondNumber);
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  result = eval(firstNumber + " " + operator + " " + secondNumber);
  display.value = result;
  firstNumber = result;
  secondNumber = "";
  // console.log(result);
  displayText = result;
  isResultBtn = true;
  displayTextEl.innerText = " ";
}
document.querySelector(".result").addEventListener("click", resultFunction);

// RESET
function resetFunction() {
  result = 0;
  firstNumber = "";
  secondNumber = "";
  displayText = " ";
  displayTextEl.innerText = displayText;
  display.value = 0;
  isFirstNumber = true;
}
document.querySelector(".reset").addEventListener("click", resetFunction);

// DELETE
function delFunction() {
  if (isFirstNumber) {
    firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    display.value = parseFloat(secondNumber);
  }
  displayTextEl.innerText = displayText.substring(0, displayText.length - 1);
}
document.querySelector(".del").addEventListener("click", delFunction);

window.onkeydown = function (event) {
  let key = event.key;
  console.log(key);
  if (key == "1") {
    one();
  } else if (key == "2") {
    two();
  } else if (key == "3") {
    three();
  } else if (key == "4") {
    four();
  } else if (key == "5") {
    five();
  } else if (key == "6") {
    six();
  } else if (key == "7") {
    seven();
  } else if (key == "8") {
    eight();
  } else if (key == "9") {
    nine();
  } else if (key == "0") {
    zero();
  } else if (key == "+") {
    add();
  } else if (key == "-") {
    subtract();
  } else if (key == "*") {
    multiply();
  } else if (key == "/") {
    divide();
  } else if (key == ".") {
    dot();
  } else if (key == "Backspace") {
    delFunction();
  } else if (key == "=" || key == "Enter") {
    resultFunction();
  }
};
