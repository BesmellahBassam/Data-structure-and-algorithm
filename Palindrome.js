/*
Given a string, return true if it reads the same forward and backward
 otherwise return false.
--- Examples
  palindrome("abba") === true
  palindrome("racecar") === true
  palindrome("abc") === false
*/
const palindrome = (str) => {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return str === reversed;
};
