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
let isOperator = false;
let isResult = false;
function tempResultFunction() {
  tempResult = eval(firstNumber + " " + operator + " " + secondNumber);
  console.log("FirstNumber " + firstNumber, "SecondNumber " + secondNumber);
  firstNumber = tempResult;
  secondNumber = "";
  console.log("FirstNumber " + firstNumber, "SecondNumber " + secondNumber);
}
function isResultCheckFunc() {
  if (isResult) {
    resetFunction();
    isResult = false;
  }
}

// NUMBERS
function one() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "1";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "1";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "1";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".one").addEventListener("click", one);

function two() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "2";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "2";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "2";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".two").addEventListener("click", two);

function three() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "3";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "3";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "3";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".three").addEventListener("click", three);

function four() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "4";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "4";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "4";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".four").addEventListener("click", four);

function five() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "5";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "5";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "5";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".five").addEventListener("click", five);

function six() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "6";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "6";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "6";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".six").addEventListener("click", six);

function seven() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "7";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "7";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "7";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".seven").addEventListener("click", seven);

function eight() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "8";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "8";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "8";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".eight").addEventListener("click", eight);

function nine() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "9";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "9";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "9";
  displayTextEl.innerText = displayText;
  isOperator = false;
}
document.querySelector(".nine").addEventListener("click", nine);

function zero() {
  isResultCheckFunc();
  if (isFirstNumber) {
    firstNumber = firstNumber + "0";
    display.value = parseFloat(firstNumber);
  } else {
    secondNumber = secondNumber + "0";
    display.value = parseFloat(secondNumber);
  }
  displayText = displayText + " " + "0";
  displayTextEl.innerText = displayText;
  isOperator = false;
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
  isOperator = true;
  isResult = false;

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
  isOperator = true;
  isResult = false;

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
  isOperator = true;
  isResult = false;

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
  isOperator = true;
  isResult = false;

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
  if (isResult) {
    return;
  }
  // if (operator === "/" && secondNumber === "0") {
  //   displayText = "Error";
  //   displayTextEl.innerText = displayText;
  //   return;
  // }
  // console.log("FirstNumber" + firstNumber);
  // console.log("Second Number" + secondNumber);
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  result = eval(firstNumber + " " + operator + " " + secondNumber);
  if (result == "Infinity") {
    display.value = "Can't divide by 0";
  } else {
    display.value = result;
  }
  firstNumber = result;
  secondNumber = "";
  // console.log(result);
  displayText = result;
  isResultBtn = true;
  displayTextEl.innerText = " ";
  isResult = true;
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
    display.value = firstNumber;
  } else if (isOperator) {
    operator = "";
  } else {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    display.value = secondNumber;
  }
  displayText = displayText.substring(0, displayText.length - 1);
  displayTextEl.innerText = displayText;
}
document.querySelector(".del").addEventListener("click", delFunction);

// KEYBOARD
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

//THEMES
const keyBackgroundTwo = document.querySelector(".two-color");
const keyBackgroundOne = document.getElementsByClassName("one-color");
const keyBackgroundThree = document.querySelector(".third-color");

const sliderEl = document.getElementById("myRange");
if (sliderEl.value === "1") {
  document.body.style.color = "white";
  document.documentElement.style.backgroundColor = "hsl(222, 26%, 31%)";
  document.querySelector(".switch-icon").style.backgroundColor =
    "hsl(223, 31%, 20%)";
  sliderEl.style.setProperty("--sliderColor", "hsl(6, 100%, 50%)");
  document.querySelector(".input-div").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector("#input-number").style.color = "white";
  document.querySelector("#input-number").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector(".numpad-div").style.backgroundColor =
    "hsl(223, 31%, 20%)";
  for (var i = 0; i < keyBackgroundOne.length; i++) {
    console.log(i);
    keyBackgroundOne[i].style.backgroundColor = "hsl(30, 25%, 89%)";
    keyBackgroundOne[i].style.color = "hsl(221, 14%, 31%)";
    keyBackgroundOne[i].style.boxShadow = "0px 2px 1px 1px hsl(28, 16%, 65%)";
  }

  keyBackgroundTwo.style.backgroundColor = "hsl(225, 21%, 49%)";
  keyBackgroundTwo.style.boxShadow = "0px 2px 1px 1px hsl(224, 28%, 35%)";
  keyBackgroundThree.style.backgroundColor = "hsl(6, 63%, 50%)";
  keyBackgroundThree.style.boxShadow = "0px 2px 1px 1px hsl(6, 70%, 34%)";
  keyBackgroundTwo.style.color = "hsl(221, 14%, 31%)";
  keyBackgroundThree.style.color = "hsl(221, 14%, 31%)";
  document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 2px 1px 1px hsl(224, 28%, 35%)";
}

function theme() {
  if (sliderEl.value === "1") {
    document.body.style.color = "white";
    document.documentElement.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector(".switch-icon").style.backgroundColor =
      "hsl(223, 31%, 20%)";
    sliderEl.style.setProperty("--sliderColor", "hsl(6, 100%, 50%)");
    document.querySelector(".input-div").style.backgroundColor =
      "hsl(224, 36%, 15%)";
    document.querySelector("#input-number").style.color = "white";
    document.querySelector("#input-number").style.backgroundColor =
      "hsl(224, 36%, 15%)";
    document.querySelector(".numpad-div").style.backgroundColor =
      "hsl(223, 31%, 20%)";
    for (var i = 0; i < keyBackgroundOne.length; i++) {
      console.log(i);
      keyBackgroundOne[i].style.backgroundColor = "hsl(30, 25%, 89%)";
      keyBackgroundOne[i].style.color = "hsl(221, 14%, 31%)";
      keyBackgroundOne[i].style.boxShadow = "0px 2px 1px 1px hsl(28, 16%, 65%)";
    }

    keyBackgroundTwo.style.backgroundColor = "hsl(225, 21%, 49%)";
    keyBackgroundTwo.style.boxShadow = "0px 2px 1px 1px hsl(224, 28%, 35%)";
    keyBackgroundThree.style.backgroundColor = "hsl(6, 63%, 50%)";
    keyBackgroundThree.style.boxShadow = "0px 2px 1px 1px hsl(6, 70%, 34%)";
    keyBackgroundTwo.style.color = "hsl(221, 14%, 31%)";
    keyBackgroundThree.style.color = "hsl(221, 14%, 31%)";
    document.querySelector(".reset").style.backgroundColor =
      "hsl(225, 21%, 49%)";
    document.querySelector(".reset").style.boxShadow =
      "0px 2px 1px 1px hsl(224, 28%, 35%)";
  }
  if (sliderEl.value === "2") {
    document.body.style.color = "hsl(60, 10%, 19%)";
    document.documentElement.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector(".switch-icon").style.backgroundColor =
      "hsl(0, 5%, 81%)";
    sliderEl.style.setProperty("--sliderColor", "hsl(25, 98%, 40%)");
    document.querySelector(".input-div").style.backgroundColor =
      "hsl(0, 0%, 93%)";
    document.querySelector("#input-number").style.color = "black";
    document.querySelector("#input-number").style.backgroundColor =
      "hsl(0, 0%, 93%)";
    document.querySelector(".numpad-div").style.backgroundColor =
      "hsl(0, 5%, 81%)";

    for (var i = 0; i < keyBackgroundOne.length; i++) {
      console.log(i);
      keyBackgroundOne[i].style.backgroundColor = "hsl(45, 7%, 89%)";
      keyBackgroundOne[i].style.boxShadow = "0px 2px 1px 1px hsl(28, 16%, 65%)";
      keyBackgroundOne[i].style.color = "hsl(60, 10%, 19%)";
    }
    keyBackgroundTwo.style.backgroundColor = "hsl(185, 42%, 37%)";
    keyBackgroundTwo.style.boxShadow = "0px 2px 1px 1px hsl(185, 58%, 25%)";
    keyBackgroundThree.style.backgroundColor = "hsl(25, 98%, 40%)";
    keyBackgroundThree.style.boxShadow = "0px 2px 1px 1px hsl(25, 99%, 27%)";

    keyBackgroundTwo.style.color = "hsl(60, 10%, 19%)";
    keyBackgroundThree.style.color = "hsl(60, 10%, 19%)";
    document.querySelector(".reset").style.backgroundColor =
      "hsl(185, 42%, 37%)";
    document.querySelector(".reset").style.boxShadow =
      "0px 2px 1px 1px hsl(185, 58%, 25%)";
  }
  if (sliderEl.value === "3") {
    document.body.style.color = "hsl(52, 100%, 62%)";
    document.documentElement.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector(".switch-icon").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    sliderEl.style.setProperty("--sliderColor", "hsl(176, 100%, 44%)");
    document.querySelector(".input-div").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector("#input-number").style.color = "hsl(52, 100%, 62%)";
    document.querySelector("#input-number").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".numpad-div").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    for (var i = 0; i < keyBackgroundOne.length; i++) {
      console.log(i);
      keyBackgroundOne[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      keyBackgroundOne[i].style.boxShadow =
        "0px 2px 1px 1px  hsl(290, 70%, 36%)";
      keyBackgroundOne[i].style.color = "hsl(52, 100%, 62%)";
    }
    keyBackgroundTwo.style.backgroundColor = "hsl(281, 89%, 26%)";
    keyBackgroundTwo.style.boxShadow = "0px 2px 1px 1px  hsl(285, 91%, 52%)";
    keyBackgroundThree.style.backgroundColor = "hsl(176, 100%, 44%)";
    keyBackgroundThree.style.boxShadow = "0px 2px 1px 1px  hsl(177, 92%, 70%)";

    keyBackgroundTwo.style.color = "hsl(221, 14%, 31%)";
    keyBackgroundThree.style.color = "hsl(221, 14%, 31%)";
    document.querySelector(".reset").style.backgroundColor =
      "hsl(281, 89%, 26%)";
    document.querySelector(".reset").style.boxShadow =
      "0px 2px 1px 1px  hsl(285, 91%, 52%)";
  }
}
document.querySelector(".switch-icon").addEventListener("click", theme);
document.querySelector(".switch-icon").addEventListener("touchend", theme);
