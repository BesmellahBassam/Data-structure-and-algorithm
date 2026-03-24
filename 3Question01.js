/*
---Directions
   Given a string, return the number of vowels in the string.
   Vowels are: a, e, i, o, u (case-insensitive).
--Examples
   countVowels("hello") === 2
   countVowels("hI") === 1
   countVowels("why") === 0
*/

const countVowels = (str) => {
  // First approach
  let counter = 0;
  for (const char of str) {
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
    }
  }
  // return counter;
  //Second approach
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
// console.log(countVowels("hello hI"));
