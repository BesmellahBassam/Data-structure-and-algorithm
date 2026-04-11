/*
Backspace String Compare
Problem:
Given two strings s and t, return true if they are equal after interpreting # as a backspace.
Example:
Input: "ab#c", "ad#c"
Output: true
Both become "ac".
*/

function backspaceCompare(s, t) {
  return process(s) === process(t);
}

function process(str) {
  const stack = [];

  for (const char of str) {
    if (char === "#") {
      stack.pop(); // remove last character
    } else {
      stack.push(char); // add character
    }
  }
  return stack.join("");
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
