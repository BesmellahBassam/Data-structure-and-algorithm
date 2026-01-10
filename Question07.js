/*
--- Directons
   Given a total number of seconds, convert it into hours, minutes, and seconds.
   Return the reslt in a string
--- Examples
   convertSeconds(3665) -> "1 hr, 1 min, 5 sec"
   convertSeconds(59) -> "0 hr, 0 min, 59 sec"
*/

const convertSeconds = (totalSeconds) => {
  const hours = totalSeconds / 3600;
  const minutes = (totalSeconds % 3600) / 60;
  const seconds = totalSeconds % 60;
  return `${hours} hr, ${minutes} min, ${seconds} sec`;
};
// console.log(convertSeconds(3665));
