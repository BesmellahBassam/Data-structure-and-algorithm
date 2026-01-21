/*
Find the largest and smallest of three numbers
Descriptin: Read three integers and print the largest and smallest.
Example:
Input:
3, 9, 5
Output:
Largest: 9, Smallest: 3
*/

const findLargestAndSmallest = () => {
  largest = a;
  smallest = a;

  if (c > largest) {
    largest = c;
  }
  if (b > largest) {
    largest = b;
  }
  if (c < smallest) {
    smallest = c;
  }
  if (b < smallest) {
    smallest = b;
  }
  return { largest, smallest };
};
// console.log(findLargestAndSmallest(4,2,3));
