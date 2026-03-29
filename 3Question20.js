/*
---Directions
   Given a weight (kg) and height (meters), compute Body Mass Index (BMI).
   BMI = weight / (height * height).
   Return a string category based on the BMI range:
     - Under weight (bmi < 18.5)
     - Normal weight (18.5 <= bmi < 25)
     - over weight (25 <= bmi < 30)
     - Obese (bmi > 30)
     - over obese (fallback case)
--Examples
   BMI(73, 1.83) === "Normal weight"
   BMI(50, 1.83) === "Under weight"
*/

const BMI = (weight, height) => {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Under weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "over weight";
  } else if (bmi > 30) {
    return "Obese";
  } else {
    return "over obese";
  }
};
// console.log(BMI(73, 1.83));
