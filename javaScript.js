let display1 = document.querySelector(".display");
let buttons = document.getElementsByClassName("number");
let operations = document.getElementsByClassName("operation");
let equal = document.getElementsByClassName("equality");
let clear = document.getElementsByClassName("clear");
let addSymbol, subSymbol, multSympol, divSympol;
let nextNumberAfterResutl, lastOperation ;
let firstPoint,nextPoint;
//numbers
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", function (number) {
    if (nextNumberAfterResutl === true) {
      display1.innerHTML = number.target.innerHTML;
      nextNumberAfterResutl = false;
      return;
    }
    display1.innerHTML+=number.target.innerHTML;
  });
});
//operations
Array.from(operations).forEach((element) => {
  element.addEventListener("click", function (event) {
    nextNumberAfterResutl = false;
     nextPoint = false;
    lastOperation = display1.innerText.slice(-1);
    if (lastOperation === "+") {
      return;
    } else if (lastOperation === "-") {
      return;
    } else if (lastOperation === "*") {
      return;
    } else if (lastOperation === "/") {
      return;
    } else {
      display1.innerHTML = display1.innerHTML + event.target.innerHTML;
    }
  });
});
//decimalPointCondition
document
  .querySelector(".decimalPoint")
  .addEventListener("click", function (_dot) {
       firstPoint = _dot.target.innerText;
    if (firstPoint === "." && nextPoint) {
      return;
    }
    if (firstPoint === ".") {
      nextPoint = true;
    }
    display1.innerHTML = display1.innerHTML + _dot.target.innerHTML;})
//equalsymbol
Array.from(equal).forEach((element) => {
  element.addEventListener("click", function (_event) {
    display1.innerHTML = eval(display1.innerText);
    nextNumberAfterResutl = true;
  });
});
//clear
Array.from(clear).forEach((element) => {
  element.addEventListener("click", function (_event) {
    display1.innerHTML = "";
  });
});
