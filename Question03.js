/*
---Directions
   Given a number, return the sum of its digits.
--Examples
   sumOfDigits(123) === 6
   sumOfDigits(500) === 5
   sumOfDigits(9012) === 12
*/

const sumOfDigits = (number) => {
  const toString = number.toString();
  result = 0;
  for (const element of toString) {
    const parsed = parseInt(element);
    result += parsed;
  }
  return result;
};
// console.log(sumOfDigits(123455103));
