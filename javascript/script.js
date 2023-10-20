"use strict";

let result = "";
let numbers = document.querySelectorAll(".btn-black");
numbers.forEach((item) => {
  item.addEventListener("click", function (event) {
    let add = event.target.textContent;
    result = result.concat(add);
    document.querySelector(".result").textContent = result;
  });
});

//Clear click event handler
let clear = document.querySelector(".btn-clear");
clear.addEventListener("click", function () {
  result = "";
  document.querySelector(".result").textContent = '0';
});

// negative click event handler
let negative = document.querySelector(".btn-negative");
negative.addEventListener("click", function () {
 let negative = "-";
  result = eval(negative.concat(result));
  document.querySelector(".result").textContent = result;
  result = result.toString();
});

// Percent click event handler
let percent = document.querySelector(".btn-percent");
percent.addEventListener("click", function (event) {
  let percentageValue = eval(result * 0.01);
  result = percentageValue;
  document.querySelector(".result").textContent = result;
  result = result.toString();
});

// Operator buttons click handler
let divide = document.querySelector(".btn-divide");
let operators = document.querySelectorAll(".btn-gold");
operators.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (item === divide) {
      result = result.concat("/");
      document.querySelector(".result").textContent = result;
    } else {
      let operator = event.target.textContent;
      result = result.concat(operator);

      document.querySelector(".result").textContent = result;
    }
  });
});

//equal button click handler
let equality = document.querySelector(".btn-equal");
equality.addEventListener("click", function () {
  // Evaluate the mathematical expression stored in the `result` variable
  let expressionResult = eval(result);

  // Update the result display with the evaluated result
  document.querySelector(".result").textContent = expressionResult;
  let resultstring = "";
  result = resultstring.concat(expressionResult);
});

//for the purpose of using keyboard

window.addEventListener("keydown", function (event) {
  let character = event.key.charAt(0);
  console.log(character);
  let characterCode = event.key.codePointAt(0);
  console.log(characterCode);
  if (characterCode >= 42 && characterCode <= 57 && characterCode != 44) {
    result = result.concat(character);
    document.querySelector(".result").textContent = result;
  }

  // if enter is pressed we want to evaluate the calculation

  if (characterCode == 69) {
    let expressionResult = eval(result);
    document.querySelector(".result").textContent = expressionResult;
    let resultstring = "";
    result = resultstring.concat(expressionResult);
  }

  // if backspace is pressed we need to slice the result
  if (characterCode == 66) {
    let cutText = result.slice(0, -1);
    result = cutText;
    console.log(result);
    document.querySelector(".result").textContent = result;
  }
});
