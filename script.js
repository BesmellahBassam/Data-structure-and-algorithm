const stringReversal = (str) => {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
// console.log(stringReversal("zaid!"));

const palindrome = (str) => {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return str === reversed;
};
// console.log(palindrome("abc"));

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
// console.log(secondLargestNumber([10, 20, 4, 45, 99, 30, 70, 12, 50]));

const mergeTwoSortedArr = (arr1, arr2) => {
  const tempArr = [...arr1, ...arr2];
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = i + 1; j < tempArr.length; j++) {
      if (tempArr[i] > tempArr[j]) {
        const t = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = t;
      }
    }
  }
  return tempArr;
};
// console.log(mergeTwoSortedArr([1, 3, 5], [2, 4, 6]));

const rotateKTimes = (arr, times) => {
  let tempArr = [];
  for (let i = 1; i <= times; i++) {
    tempArr.push(arr.pop());
  }
  return [...tempArr, ...arr];
};
// console.log(rotateKTimes([1, 2, 3, 4, 5], 2));

const arrayIntersection = (arr1, arr2) => {
  let commanArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        commanArr.push(arr1[j]);
      }
    }
  }
  return commanArr;
};
// console.log(arrayIntersection([1, 2, 3, 4, 5, 7, 9], [3, 4, 5, 6]));

const everBeforeOdd = (arr) => {
  let resultArr = [];
  let remained = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      resultArr.push(arr[i]);
    } else remained.push(arr[i]);
  }
  return [...resultArr, ...remained];
};
// console.log(everBeforeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
