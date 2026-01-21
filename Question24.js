/*
--- Directions
Given a positive integer n, return an array containing the n
numbers in the Fibonacci sequence.

--- Examples
fibonacci(1) === [0]
fibonacci(2) === [0, 1]
fibonacci(7) === [0, 1, 1, 2, 3, 5, 8]
fibonacci(10) === [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
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
