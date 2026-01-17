/*
---Directions
   Given an array of numbers, return the smallest number in the array.
--Examples
   returnSmallest([2, 4, 1]) === 1
   returnSmallest([10, 5, 10]) === 5
*/

const returnSmallest = (arr) => {
  let smallest = arr[0];
  for (const element of arr) {
    if (element < smallest) smallest = element;
  }
  return smallest;
};
// console.log(returnSmallest([2, 4, 5, 6, 7, 12, 1, 40, 9, 12]));
