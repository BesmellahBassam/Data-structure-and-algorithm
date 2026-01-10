/*
---Directions
  Given three side lengths, determine whether they can form a triangle.
  If valid, classify the triangle type.
  Return a descriptive string for invalid inputs, invalid triangles, or the triangle type.
  --Examples
  triangleCheck(3, 4, 5) === "falid triangle, scalene"
  triangleCheck(2, 2, 2) === "valid triangle, equilaterl"
  triangleCheck(2, 2, 3) === "valid triangle, Isoscles"
  triangleCheck(1, 2, 3) === "Not a valid triangle"
  triangleCheck(0, 2, 3) === "invalid input"
*/

function triangleCheck(a, b, c) {
  if (!a || !b || !c) {
    return "invalid input";
  }

  // Is triangle valid
  const valid = a + b > c && a + c > b && b + c > a;
  if (!valid) return "Not a valid triangle";

  // Type classification
  if (a === b && b === c) return "valid triangle, equilaterl";
  if (a === b || a === c || b === c) return "valid triangle, Isoscles";
  return "falid triangle, scalene";
}
// console.log(triangleValidityAndType(3, 4, 5)); // Valid triangle, Scalene
