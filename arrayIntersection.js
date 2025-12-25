/*
Given two arrays, return a new array containing the values that appear in both.
--- Examples
  arrayIntersection([1, 2, 3, 4], [3, 4, 5]) === [3, 4]
  arrayIntersection(["a", "b"], ["b", "c"]) === ["b"]
*/

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
