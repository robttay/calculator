//
//
var string = "";
var current;
var operator;
var flag = 0;

var screen = document.querySelector("#screen");

function addNumber(current) {
  if (string == "") {
    string = current;
    screen.value = string;
    return string;
  } else {
    string = string.concat(current);
    screen.value = string;
    return string;
  }
}

function clearButton() {
  string = "";
  screen.value = " ";
  flag = 0;
  return string;
}

function addOperator(current) {
  console.log(current);
  if (current !== "-" && string == "") {
    alert("Invalid Operator - Please enter a number, minus sign or decimal.");
  } else if (string == undefined) {
    string = current;
    flag = 0;

    return string;
  } else {
    string = string.concat(current);
    flag = 0;
    return string;
  }
}

function addDecimal(current) {
  if (string.indexOf(".") !== -1) {
    console.log(string.indexOf("."));
    alert("Sorry, only one decimal allowed.");
  } else if (string == "") {
    string = current;
    screen.value = string;
    return string;
  } else {
    string = string.concat(current);
    screen.value = string;
    return string;
  }
}

function getTotal(current) {
  if (string == "" || flag == 1) {
    alert("Please enter a number, minus sign or decimal.");
  } else {
    total = eval(string);
    string = total.toString();
    screen.value = string;
    flag = 1;
    return string;
  }
}
