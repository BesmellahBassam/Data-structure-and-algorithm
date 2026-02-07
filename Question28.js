/*
Check if Two Arrays Are Equal
Descriptin: Compare two arrays and determine if they contain the same elements in the same
order.
Example:
Input:
[1, 2, 3], [1, 2, 3]
Output:
Equal
*/
const compareTwoArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
// console.log(compareTwoArrays([1, 2, 3], [1, 2, 3]));
