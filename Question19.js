/*
---Directions
   Given a number n, print a centered pyramid of height  using "#" characters.
  
--Examples
   twoSidedSteps(3) prints:
     "  #  "
     " ### "
     "#####"

   twoSidedSteps(5) prints:
     "    #    "
     "   ###   "
     "  #####  "
     " ####### "
     "#########"
*/

const twoSidedSteps = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    step = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        step += "#";
      } else step += " ";
    }
    console.log(step);
  }
};
// twoSidedSteps(5);
// console.log(twoSidedSteps(3));
