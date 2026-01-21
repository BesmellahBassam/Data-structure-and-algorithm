/*
--- Directions
Given an integer, return the total number of digits in that integer.

--- Examples
countDigits(785) === 3
countDigits(0) === 1
countDigits(1000) === 4
countDigits(-15) === 3
*/
const countDigits = (number) => {
  // First Way
  // return number.toString().length;

  // Second Way
  let count = 0;
  let n = Math.abs(number);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};
// console.log(countDigits(785));
