/*
Sentence Abbreviatin
Descriptin: Convert sentence into fist-lettr abbreviatin.
Example: "I am learning JavaScript" → "I a l J"
*/

const sentenceAbbreviation = (sentence) => {
  let abbreviation = sentence[0];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      abbreviation += sentence[i];
    }
  }
  return abbreviation;
};
// console.log(sentenceAbbreviation("I am learning JavaScript"));
