/*Given a string, return true if it reads the same forward and backward
 otherwise return false.
--- Examples
  palindrome("abba") === true
  palindrome("racecar") === true
  palindrome("abc") === false
*/

const palindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};
