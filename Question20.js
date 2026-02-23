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
  let n = Math.abs(number);
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return number < 0 ? -reversed : reversed;
};
// console.log(reverseNumber(15));
