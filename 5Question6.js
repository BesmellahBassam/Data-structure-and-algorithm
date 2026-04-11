/*
Remove Adjacent Duplicates
Problem:
Given a string s, repeatedly remove adjacent pairs of equal characters.
Example:
Input: "abbaca"
Output: "ca"
*/

function removeDuplicates(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // remove duplicate pair
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(removeDuplicates("abbaca")); // "ca"
console.log(removeDuplicates("azxxzy")); // "ay"
console.log(removeDuplicates("aabbcc")); // ""
