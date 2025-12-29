/*
---Directions
   Given an interger return an integer that is the reverse
   ordering of numbers.
   --Examples
   reverseNumber(15) === 51
   reverseNumber(981) === 981
   reverseNumber(500) == 5
   reverseNumber(-15) == -51
   reverseNumber(-90) == -9
*/

const reverseNumber = (number) => {
  reversed = "";
  const toString = number.toString();
  for (let index = 0; index < toString.length; index++) {
    reversed = toString[index] + reversed;
  }
  reversed = parseInt(reversed);
  if (number < 1) {
    reversed = reversed * -1;
  } else reversed = reversed * 1;
  return reversed;
};
// console.log(reverseNumber(15));
