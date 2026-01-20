/*
Calculate Factorial Using Recursion
Descriptin: Implement factorial(n), which calculates the factorial of n using recursion.
Example:
Input:
5
Output:
120
*/
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(5)); // 120
