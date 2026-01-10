/*
--- Directions
   Given the width and height of a rectangle, return area and perimeter.
--- Examples
   calculateRectangeAreaAndPerimeter(4, 5) -> { area: 20, perimeter: 18 }
   calculateRectangeAreaAndPerimeter(1, 1) -> { area: 1, perimeter: 4 }
*/

const calculateRectangeAreaAndPerimeter = (widht, height) => {
  const area = widht * height;
  const perimeter = 2(height + widht);
  console.log("area is", area, "perimeter is", perimeter);
};
// calculateRectangeAreaAndPerimeter(4, 5);
