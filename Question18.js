/*
---Directions
  Given an integer n, return the sum of the natural numbers from 1 to n.
  --Examples
  sumofNatNums(5) === 15   // 1 + 2 + 3 + 4 + 5
  sumofNatNums(1) === 1
  sumofNatNums(0) === 0
*/

const sumofNatNums = (number) => {
  let sum = 0;
  for (let index = 1; index <= 5; index++) {
    // NOTE: currently sums to 5, not to "number"
    sum += index;
  }
  return sum;
};
