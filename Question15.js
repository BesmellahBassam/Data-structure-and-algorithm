/*
---Directions
   Given a single character, check whether it is a vowel, consonant, digit,
   or special symbol.
   --Examples
   checkCharacter("a") === "Vowel"
   checkCharacter("B") === "Consonant"
   checkCharacter("7") === "Digit"
   checkCharacter("#") === "Special Symbol"
*/
function checkCharacter(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return "Data must be one chararacter.";
  }

  if (/[aeiou]/i.test(char)) return "Vowel";
  if (/[a-z]/i.test(char)) return "Consonant";
  if (/[0-9]/.test(char)) return "Digit";

  return "Special Symbol";
}
// console.log(checkCharacter("a"));
