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
  const sign = number < 0 ? -1 : 1;
  let n = Math.abs(number);
  let reversed = 0;

  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  return sign * reversed;
};

console.log(reverseNumber(15));
