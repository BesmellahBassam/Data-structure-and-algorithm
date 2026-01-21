/*
--- Directions
Given a non-negative integer, return the sum of its digits.
--- Examples
sumOfDigits(123) === 6     // 1 + 2 + 3
sumOfDigits(0) === 0
sumOfDigits(500) === 5     // 5 + 0 + 0
*/

const sumOfDigits = (number) => {
  const n = Math.abs(number);
  result = 0;
  while (n > 0) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return result;
};
// console.log(sumOfDigits(123));
