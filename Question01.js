/*
--- Directions
   Given two values (a and b), return an object where the values are swapped.
--- Examples
   swapVariables(5, 10) -> { a: 10, b: 5 }
   swapVariables("x", "y") -> { a: "y", b: "x" }
*/
const swapVariables = (a, b) => {
  [a, b] = [b, a];
  return { a, b };
};
module.export = { swapVariables };
