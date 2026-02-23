/*
---Directions
  Given an integer n, print the multiplication table for n from 1 to 10.
  Each line should have the format: "n * i = result".
  --Examples
  multiplicationTable(5) prints:
  "5 * 1 = 5"
  "5 * 2 = 10"
  ...
  "5 * 10 = 50"
*/

const multiplicationTable = (number) => {
  let index = 1;
  while (index <= 10) {
    console.log(`${number} * ${index} = ${index * number}`);
    index++;
  }
};
