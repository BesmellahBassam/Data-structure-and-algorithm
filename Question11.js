/*
String Rotatin Check
Descriptin: Check if one string is rotatin of another.
Example:
"waterbotte", "erbottewat" → True
*/

const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1 + str1.includes(str2)) return true;
  return false;
};
// console.log(stringRotation("waterbottle", "erbottlewat"));
