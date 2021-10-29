/* eslint-disable no-console */

function calculator(num1: number, num2: number, operation: string) {
  if (!num1 || !num2 || !operation) {
    return "Please provide all required fields..";
  }
  if (!num1 || !num2) {
    return "Please provide desired numbers..";
  }
  if (!operation) {
    return "Please provide operation to do...";
  }
  if (operation === "+") {
    return num1 + num2;
  }
  if (operation === "-") {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
  if (operation === "*") {
    return num1 * num2;
  }
  if (operation === "/") {
    return num1 / num2;
  }
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    return "Please provide valid arithmetical operation..";
  } else {
    return null;
  }
}

module.exports.calculator = calculator;
