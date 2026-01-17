/*
---Directions
   Given a number, generate the Fibonacci sequence up to that many terms.
   Fibonacci starts with 0 and 1, and each next number is the sum of the two previous.
--Examples
   fibonacci(7) === [0, 1, 1, 2, 3, 5, 8]
*/

const fibonacci = (number) => {
  const fibArr = [0, 1];
  if (number <= 1) return [0];
  if (number == 2) return fibArr;
  for (let index = 2; index < number; index++) {
    const nextFib = sequence[index - 1] + sequence[index - 2];
    fibArr.push(nextFib);
  }
  return fibArr;
};
// console.log(fibonacci(7)) =  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
