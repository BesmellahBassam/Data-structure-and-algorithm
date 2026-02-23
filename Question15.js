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
    return "Data must be one character.";
  }

  const lowerChar = char.toLowerCase();

  //  if vowel
  if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
    return "Vowel";
  }

  // if a character not vowel
  if (lowerChar >= "a" && lowerChar <= "z") {
    return "Consonant";
  }

  // if number
  if (char >= "0" && char <= "9") {
    return "Digit";
  }

  return "Special Symbol";
}

// console.log(checkCharacter("a"));
