/*
---Directions
   Given a number n, print a left-aligned triangle using "#" characters.
--Examples
   stepsLeft(3) prints:
     "#  "
     "## "
     "###"
*/

const stepsLeft = (n) => {
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};
// console.log(stepsLeft(5));
