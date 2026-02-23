/*
--- Directions
   Given an integer, return "Even" if it is divisble by 2, otherwise return "Odd".
--- Examples
   isEvenOrOdd(5) -> "Odd"
   isEvenOrOdd(10) -> "Even"
*/

const isEvenOrOdd = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};
// console.log(isEvenOrOdd(5));
