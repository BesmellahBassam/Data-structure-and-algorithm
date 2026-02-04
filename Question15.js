/*
Kadane’s Algorithm (Max Subarray Sum)
Example:
[-2,1,-3,4,-1,2,1,-5,4] → 6
*/

function maxSubarraySum(nums) {
  if (nums.length === 0) {
    console.log("The array is empty");
    return;
  }

  let currentSum = nums[0];
  let bestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];

    currentSum = Math.max(x, currentSum + x);
    console.log(currentSum);

    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
}
/*
1: currsum =  1, bestsum = 1
2: currsum = -2, bestsubm = 1
3: currsum = 4, bestsum = 4
4: currsum = 3, bestsum = 4
5: currsum = 5, bestsum = 5
6: currsum = 6, bestsum = 6
7: currsum = 1, bestsum 6,
8: cursum = 5 best = 6
*/
// Example
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(arr)); // 6
