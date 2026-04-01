/* 
K-th Largest Element
Given an array of numbers and a value k, fid the number that would appear in the k-th
positin if the array were sorted in descending order.
*/

function findKthLargest(nums, k) {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1];
}
// Example
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
