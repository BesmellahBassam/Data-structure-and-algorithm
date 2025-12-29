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
  let counter = 0;
  for (let index = 0; index < str.length; index++) {
    const element = str[index].toLowerCase();
    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
    }
  }
  return counter;
};
// console.log(countVowels("hello hI"));
