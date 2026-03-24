/*
Generate all prime numbers up to N
Descriptin: List all prime numbers up to a given limit using a loop.
Example:
Input:
10
Output:
2, 3, 5, 7
*/

const printPrimeNumbers = (number) => {
  const primeArr = [];

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  return primeArr;
};

// Helper function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

// console.log(printPrimeNumbers(10)); // [2, 3, 5, 7]
// console.log(printPrimeNumbers(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
