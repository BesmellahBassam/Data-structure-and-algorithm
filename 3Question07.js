/*
---Directions
   Given an array of numbers, return the sum of all values in the array.
--Examples
   sumOfAll([1, 2, 3, 4, 5]) === 15
   sumOfAll([]) === 0
   sumOfAll([10, -3, 2]) === 9
*/

const sumOfAll = (arr) => {
  let result = 0;
  for (const char of arr) {
    result += char;
  }
  return result;
};
console.log(sumOfAll([1, 2, 3, 4, 5]));
