/*
Find GCD of two numbers
Descriptin: Compute the greatest common divisor using repeated subtractin or the Euclidean
algorithm.
Example:
Input:
12, 18
Output:
6
*/

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// console.log(findGCD(12, 18));  // 6
