/*
Given two arrays, return a new array containing the values that appear in both.
--- Examples
  arrayIntersection([1, 2, 3, 4], [3, 4, 5]) === [3, 4]
  arrayIntersection(["a", "b"], ["b", "c"]) === ["b"]
*/

const arrayIntersection = (arr1, arr2) => {
  const arr2Map = {};
  for (const val of arr2) {
    arr2Map[val] = true;
  }
  const result = [];
  const added = {};

  for (const v of arr1) {
    if (arr2Map[v] && !added[v]) {
      added[v] = true;
      result.push(v);
    }
  }
  return result;
};
// console.log(arrayIntersection([1, 2, 3, 3, 4, 3], [2, 3, 4, 3])); // [2, 3, 4]
