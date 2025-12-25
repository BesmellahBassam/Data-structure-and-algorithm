/*
Given an array and a number k (times), rotate the array to the right k times
 and return the rotated array.
--- Examples
  rotateKTimes([1, 2, 3, 4, 5], 2) === [4, 5, 1, 2, 3]
  rotateKTimes([1, 2, 3], 1) === [3, 1, 2]
*/

const rotateKTimes = (arr, times) => {
  let tempArr = [];
  for (let i = 1; i <= times; i++) {
    tempArr.push(arr.pop());
  }
  return [...tempArr, ...arr];
};
