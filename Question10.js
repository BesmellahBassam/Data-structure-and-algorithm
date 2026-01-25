/*
 Check Unique Characters
Descriptin: Return whether a string contains only unique chars.
Example:
"hello" → Not Unique
*/

const checkUniqueChars = (str) => {
  const charMap = {};
  for (const char of str) {
    if (charMap[char]) {
      return "Not unique";
    } else {
      charMap[char] = 1;
    }
  }
  return "unique";
};
// console.log(checkUniqueChars("helowrs"));
