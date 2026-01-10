/*
---Directions
   Given a number, return whether it is "positive", "negative", or "zero".
   --Notes
   --Examples
   isPositiveOrNegative(0) === "zero"
   isPositiveOrNegative(5) === "positive"
   isPositiveOrNegative(-3) === "negative"
   isPositiveOrNegative(1) === "negative"
*/

const isPositiveOrNegative = (number) => {
  if (number == 0) {
    return "zero";
  } else if (number > 1) {
    return "positive";
  } else if (number < 1) {
    return "negative";
  }
};
// console.log(isPositiveOrNegative(0));
