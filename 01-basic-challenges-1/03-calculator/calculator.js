function calculator(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    result = num1 / num2;
  } else {
    throw new Error("Invalid operator. Please use +, -, *, or /");
  }
  return result;
}

module.exports = calculator;
