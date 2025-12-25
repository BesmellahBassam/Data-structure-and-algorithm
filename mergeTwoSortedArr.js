/*
Given two sorted arrays, merge them into a single sorted array.
--- Examples
  mergeTwoSortedArr([1, 3, 5], [2, 4, 6]) === [1, 2, 3, 4, 5, 6]
  mergeTwoSortedArr([], [1, 2]) === [1, 2]
*/

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
