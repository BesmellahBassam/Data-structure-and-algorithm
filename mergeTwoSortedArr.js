/*
Given two sorted arrays, merge them into a single sorted array.
--- Examples
  mergeTwoSortedArr([1, 3, 5], [2, 4, 6]) === [1, 2, 3, 4, 5, 6]
  mergeTwoSortedArr([], [1, 2]) === [1, 2]
*/

const mergeTwoSortedArr = (arr1, arr2) => {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
};

// mergeTwoSortedArr([1, 3, 5], [2, 4, 6]) === [1, 2, 3, 4, 5, 6]
