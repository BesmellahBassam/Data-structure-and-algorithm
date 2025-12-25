/*
Given an array of numbers, return a new array where all even numbers come first
(in their original order), followed by all odd numbers (in their original order).
--- Examples
  evenBeforeOdd([1, 2, 3, 4]) === [2, 4, 1, 3]
  evenBeforeOdd([2, 4, 6]) === [2, 4, 6]
*/

const evenBeforeOdd = (arr) => {
  let resultArr = [];
  let remained = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      resultArr.push(arr[i]);
    } else remained.push(arr[i]);
  }
  return [...resultArr, ...remained];
};
