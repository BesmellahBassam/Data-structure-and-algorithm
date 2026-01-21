/*
---Directions
   Given a year, determine if it is a leap year.
   Return "Leap" if it is a leap year, otherwise return "Not leap year".
   --Examples
   leapYear(2000) === "Leap"
   leapYear(1900) === "Not leap year"
   leapYear(2024) === "Leap"
   leapYear(2023) === "Not leap year"
*/
const leapYear = (year) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeap ? "Leap" : "Not leap year";
};
// console.log(leapYear(1900));
