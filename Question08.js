/*
---Directions
   Given an array and a value, return "found" if the value exists
   in the array, otherwise return "not found".
--Examples
   ifElementExists([1, 3, 4], 3) === "found"
   ifElementExists([1, 3, 4], 9) === "not found"
*/

const ifElementExists = (arr, element) => {
  let found = "not found";
  for (const ele of arr) {
    if (ele === element) {
      found = "found";
    }
  }
  return found;
};
// console.log(ifElementExists([1, 3, 4, 5, 6], 3));
