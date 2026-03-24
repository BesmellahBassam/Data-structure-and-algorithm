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
  // count the number of digits
  let countedDigits = 0;
  let temp = number;
  while (temp > 0) {
    countedDigits++;
    temp = Math.floor(temp / 10);
  }

  // calculate sum of each digit raised to power of countedDigits
  let sumOfAll = 0;
  temp = number;
  while (temp > 0) {
    let digit = temp % 10;
    sumOfAll += digit ** countedDigits;
    temp = Math.floor(temp / 10);
  }

  return sumOfAll === number ? "Arm Strong" : "No Arm strong";
};

// console.log(isArmstrong(370));
