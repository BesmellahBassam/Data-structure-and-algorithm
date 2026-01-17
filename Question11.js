/*
---Directions
   Given a base number and an exponent, return base raised to that power
   using a loop (no Math.pow).
--Examples
   powerFunction(3, 2) === 9
   powerFunction(2, 5) === 32
*/

const powerFunction = (num, power) => {
  result = num;
  for (let index = 1; index < power; index++) {
    result = result * num;
  }
  return result;
};
// console.log(powerFunction(3, 5));

const printPrimeNumbers = (number) => {
  const primeArr = [];
  for (let index = 0; index < number; index++) {
    if (index % 2 !== 0) primeArr.push(index);
  }
  return primeArr;
};

console.log(printPrimeNumbers(10));
