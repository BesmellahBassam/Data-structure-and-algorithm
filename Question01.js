/*
Given an array of numbers, return the second largest number.
--- Examples
  secondLargestNumber([10, 20, 4]) === 10
  secondLargestNumber([1, 99, 50, 70]) === 70
*/
const secondLargestNumber = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
