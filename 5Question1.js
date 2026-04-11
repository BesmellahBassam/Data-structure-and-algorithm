
/*
Problem: Given a string containing only '(' , ')' , '{' , '}' , '[' , ']' , determine if the string
is valid.
A valid string must have brackets closed in the correct order.
Example:
Input: s = "()[]{}"
Output: true
Input: s = "(]"
Output: false
*/

function isValid(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      // push to stack
      stack.push(char);
    } else {
      //  check if it matches top of stack
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{[()]}")); // true
console.log(isValid("([)]")); // false
console.log(isValid("")); // true
console.log(isValid("{")); // false
