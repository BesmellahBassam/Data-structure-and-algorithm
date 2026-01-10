/*
--- Directions
Given a non-negative integer, return the sum of its digits.
--- Examples
sumOfDigits(123) === 6     // 1 + 2 + 3
sumOfDigits(0) === 0
sumOfDigits(500) === 5     // 5 + 0 + 0
*/

const sumOfDigits = (number) => {
  const toString = number.toString();
  result = 0;
  for (const char of toString) {
    result += parseInt(char);
  }
  return result;
};
// console.log(sumOfDigits(123));
