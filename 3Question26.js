/*
Find Unique Elements in an Array
Descriptin: Return an array with only unique elements from the input array.
Example:
Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]
*/

const uniqueArray = (arr) => {
  const arrMap = {};
  for (const element of arr) {
    arrMap[element] = arrMap[element] + 1 || 1;
  }
  return Object.keys(arrMap);
};
// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));
