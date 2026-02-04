/* K-th Largest Element */
function findKthLargest(nums, k) {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1];
}
// Example
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
