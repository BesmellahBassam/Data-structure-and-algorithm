/*
Character Frequency Counter
Descriptin: Count occurrences of characters.
Input: "banana" → {b:1, a:3, n:2}
*/

const charRequencyCounter = (str) => {
  const charMap = {};
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
// console.log(charRequencyCounter("banana"));
