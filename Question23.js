/*
--- Directions
Given a start and end integer, return an array of all even numbers
from start up to end.

--- Examples
printEvenNumbers(1, 10) === [2, 4, 6, 8]
printEvenNumbers(2, 5) === [2, 4]
printEvenNumbers(-3, 4) === [-2, 0, 2]
*/

const printEvenNumbers = (start, end) => {
  const evenArr = [];
  for (let index = start; index < end; index++) {
    if (index % 2 == 0) evenArr.push(index);
  }
  return evenArr;
};
// console.log(printEvenNumbers(1, 10));
