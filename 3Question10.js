/*
---Directions
   Given a positive integer, determine if it is prime.
   A prime number is greater than 1 and has only two factors: 1 and itself.
   Return "prime" or "not prime".
--Examples
   isPrime(2) === "prime"
   isPrime(7) === "prime"
   isPrime(9) === "not prime"
*/

const isPrime = (number) => {
  if (number <= 1) return "not prime";
  if (number === 2) return "prime";

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return "not prime";
  }

  return "prime";
};
// console.log(isPrime(21));
