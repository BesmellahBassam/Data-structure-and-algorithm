/*
--- Directions
   Given the width and height of a rectangle, return area and perimeter.
--- Examples
   calculateRectangeAreaAndPerimeter(4, 5) -> { area: 20, perimeter: 18 }
   calculateRectangeAreaAndPerimeter(1, 1) -> { area: 1, perimeter: 4 }
*/

const calculateRectangleAreaAndPerimeter = (width, height) => {
  const area = width * height;
  const perimeter = 2 * (height + width);
  console.log("area is", area, "perimeter is", perimeter);
};
// calculateRectangleAreaAndPerimeter(4, 5);
