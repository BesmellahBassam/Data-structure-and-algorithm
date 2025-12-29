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
  if (number % 2 !== 0) {
    return "prime";
  } else return "not prime";
};
// console.log(isPrime(21));
