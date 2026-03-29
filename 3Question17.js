/*
---Directions
   Given a number n, print a right-aligned triangle using "#" characters.
--Examples
   stepsRight(3) prints:
     "  #"
     " ##"
     "###"
*/

const stepsRight = (n) => {
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < n; column++) {
      if (column < n - row - 1) {
        step += " ";
      } else {
        step += "#";
      }
    }
    console.log(step);
  }
};
// stepsRight(3);
