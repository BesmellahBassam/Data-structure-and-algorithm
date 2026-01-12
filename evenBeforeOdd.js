/*
Given an array of numbers, return a new array where all even numbers come first
 followed by all odd numbers
--- Examples
  evenBeforeOdd([1, 2, 3, 4]) === [2, 4, 1, 3]
  evenBeforeOdd([2, 4, 6]) === [2, 4, 6]
*/

const evenBeforeOdd = (arr) => {
  let left = 0; // pointer to start form left
  let right = arr.length - 1; // pointer to start form right

  while (left < right) {
    while (left < right && arr[left] % 2 === 0) {
      left++;
    }

    while (left < right && arr[right] % 2 !== 0) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
};

console.log(evenBeforeOdd([1, 2, 3, 4, 7, 9, 11, 13, 14, 30]));
