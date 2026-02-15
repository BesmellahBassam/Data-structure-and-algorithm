/*
--- Directions
   Given two values (a and b), return an object where the values are swapped.
--- Examples
   swapVariables(5, 10) -> { a: 10, b: 5 }
   swapVariables("x", "y") -> { a: "y", b: "x" }
*/
const swapVariables = (a, b) => {
  // First approach
  // [a, b] = [b, a];
  // return { a, b };

  // Use addition and subtraction
  a = a + b; //  a =  a + b
  b = a - b; //  b = (a + b) - b b = 10 - 8 = 2
  a = a - b; //  a = (a + b) -  a=
  return { a, b };
};
console.log(swapVariables(10, 20));
