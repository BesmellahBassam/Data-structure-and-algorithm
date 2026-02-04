/*
Binary Search Algorithm
Descriptin: Implement binary search in a sorted array.
Example:
Input: [1, 3, 5, 7, 9], Target = 7
Output: Found at index 3
*/

function binarySearchSortedArray(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      console.log("left half");
      high = mid - 1; // look n left half
    } else {
      low = mid + 1; // look n right half
    }
  }

  return -1;
}
const nums = [2, 5, 8, 12, 16, 23, 38];
// console.log(binarySearchSortedArray(nums, 5)); // 4
// console.log(binarySearchSortedArray(nums, 7)); // -1
