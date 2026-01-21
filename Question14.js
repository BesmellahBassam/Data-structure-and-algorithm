/*
---Directions
   Given a month number (1 to 12), return the month name and how many days it has.
   --Examples
   monthAndDays(1) === "january  31 days"
   monthAndDays(2) === "February 28 or 29 days"
   monthAndDays(11) === "November 30 days"
   monthAndDays(13) === "Enter a value  between 1 and 12"
*/
const monthAndDays = (month) => {
  if (month < 1 || month > 12) return "Enter a value  between 1 and 12";
  switch (month) {
    case 1:
      return "january  31 days";
    case 2:
      return "February 28 or 29 days";
    case 3:
      return "March 31 days";
    case 4:
      return "April 30 days";
    case 5:
      return "May 31 days";
    case 6:
      return "June  30 days";
    case 7:
      return "July 31 days";
    case 8:
      return "August 31 days";
    case 9:
      return "September 30 days";
    case 10:
      return "October 31 days";
    case 11:
      return "November 30 days";
    case 12:
      return "December 31 days";
  }
};
// console.log(monthAndDays(13));
