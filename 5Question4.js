/*
Evaluate an expression in Reverse Polish Notation.
Valid operators: + - * /.
Example:
Input: ["2","1","+","3","*"]
Output: 9
Explanation: (2 + 1) * 3
*/

function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break; //
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6  → 4 + (13/5) = 6
