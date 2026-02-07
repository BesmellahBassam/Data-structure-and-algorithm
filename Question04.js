/*
---Directions
   Given a positive integer, return an array of all factors (divisors)
   of that number.
--Examples
   displayFactors(12) === [1,2,3,4,6,12]
   displayFactors(7) === [1,7]
*/

const displayFactors = (number) => {
  const factors = [];
  for (let index = 0; index < number; index++) {
    if (number % index === 0) {
      factors.push(index);
    }
  }
  return factors;
};
// console.log(displayFactors(120));
