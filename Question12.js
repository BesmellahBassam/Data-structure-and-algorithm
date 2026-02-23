/*
---Directions
   Given two numbers and an operator (+, -, *, /), return the result
   --Examples
   simpleCalculator(2, 7, "+") === 9
   simpleCalculator(10, 3, "-") === 7
   simpleCalculator(4, 5, "*") === 20
   simpleCalculator(8, 2, "/") === 4
*/
const simpleCalculator = (num1, num2, sign) => {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};
// console.log(simpleCalculator(2, 7, "*"));
