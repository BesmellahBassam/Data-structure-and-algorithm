/*
---Directions
   Given a non-negative integer N, return N! (factorial) using an iterative approach.
   Factorial means: N! = 1 * 2 * 3 * ... * N, and 0! = 1.
--Examples
   findFactorial(5) === 120
   findFactorial(0) === 1
*/

const findFactorial = (num) => {
  result = 1;
  for (let index = 1; index < num; index++) {
    result = result * (index + 1);
  }
  return result;
};
// console.log(findFactorial(7));
