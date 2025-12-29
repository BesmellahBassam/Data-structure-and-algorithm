/*
---Directions
   Given an array of numbers, return the largest number in the array.
--Examples
   returnlargest([2, 4, 1]) === 4
   returnlargest([10, 5, 10]) === 10
*/

const returnlargest = (arr) => {
  let largets = arr[0];
  for (const element of arr) {
    if (element > largets) {
      largets = element;
    }
  }
  return largets;
};
// console.log(returnlargest([2, 4, 5, 6, 7, 12, 40, 9, 12]));
