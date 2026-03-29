/*
---Directions
   Given a number, return the sum of its digits.
--Examples
   sumOfDigits(123) === 6
   sumOfDigits(500) === 5
   sumOfDigits(9012) === 12
*/

const sumOfDigits = (number) => {
  let result = 0;
  let n = Math.abs(number);
  while (n > 0) {
    const digit = n % 10;
    result += digit;
    n = Math.floor(n / 10);
  }
  return result;
};
// console.log(sumOfDigits(123455103));
