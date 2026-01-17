/*
---Directions
   Given an array and a value, return how many times the value
   occurs in the array.
--Examples
   occurrencesOfElement([1,3,3,3], 3) === 3
   occurrencesOfElement([1,2,3], 9) === 0
*/

const occurrencesOfElement = (arr, element) => {
  let occured = 0;
  for (const ele of arr) {
    if (ele === element) {
      occured++;
    }
  }
  return occured;
};
// console.log(occurrencesOfElement([1, 3, 4, 4, 11, 10, , 20, 9, 3, 5, 6, 3], 3));
