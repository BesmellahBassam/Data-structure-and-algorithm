/*
---Directions
   Given a number, determine if it is an Armstrong number.
   A number is Armstrong if the sum of each digit raised to the power
   of the number of digits equals the original number.
   Return "Arm Strong" or "No Arm strong".
--Examples
   isArmstrong(153) === "Arm Strong"
   isArmstrong(370) === "Arm Strong"
   isArmstrong(123) === "No Arm strong"
*/

const isArmStrong = (number) => {
  const toString = number.toString();
  let sumOfAll = 0;
  for (let i = 0; i < toString.length; i++) {
    let temp = parseInt(toString[i]);
    let tempTotal = temp;
    for (let j = 1; j < toString.length; j++) {
      tempTotal = tempTotal * temp;
    }
    sumOfAll += tempTotal;
  }
  if (sumOfAll == number) return "Arm Strong";
  return "No Arm strong";
};
// console.log(isArmstrong(370));
