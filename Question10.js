/*
---Directions
   Given a numeric grade, return the letter grade.
   If the grade is not valid, return an error message.
   --Examples
   gradeCalculator(95) === "A"
   gradeCalculator(85) === "B"
   gradeCalculator(75) === "C"
   gradeCalculator(65) === "F"
   gradeCalculator(40) === "Failed"
*/

const gradeCalculator = (grade) => {
  if (!grade || grade < 1) return "provide a valid number";
  if (grade > 90 && grade < 100) {
    return "A";
  } else if (grade > 80 && grade < 90) {
    return "B";
  } else if (grade > 70 && grade < 80) {
    return "C";
  } else if (grade > 60 && grade < 70) {
    return "F";
  } else {
    return "Failed";
  }
};
// console.log(gradeCalculator(-8));
