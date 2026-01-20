/*
Find Missing Number in Array (1 to N)
Descriptin: Given numbers from 1 to N with one missing, find the missing number.
Example:
Input:
[1, 2, 4, 5]
Output:
3
*/
const findMissingNumberInArray2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i + 1 !== array[i]) return i + 1;
  }
};
// console.log(findMissingNumberInArray2([1, 2, 3, 5])); // Output: 3//[1, 2, 4, 5]
