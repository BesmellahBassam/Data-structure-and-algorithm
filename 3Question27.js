/*
Remove Duplicates from an Array
Descriptin: Remove duplicate elements effiently from an array.
Example:
Input:
[3, 1, 3, 5, 1]
Output:
[3, 1, 5]
*/
const removeDuplicateFromArray = (array) => {
  const alreadyIncluded = {};
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!alreadyIncluded[array[i]]) {
      alreadyIncluded[array[i]] = true;
      resultArr.push(array[i]);
    }
  }
  return resultArr;
};

console.log(removeDuplicateFromArray([3, 1, 3, 5, 1])); // [3, 1, 5]
// console.log(removeDuplicateFromArray([1, 2, 2, 3, 4, 4, 5]));
