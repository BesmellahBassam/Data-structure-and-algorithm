/*
String Pattrn Matching ("abba")
Descriptin: Check if sentence follows the pattrn.
Example: "dog cat cat dog" → True
*/

function patternCheck(pattern, sentence) {
  const words = sentence.split(" ");
  if (pattern.length !== words.length) return false;
  const charsMap = {};
  const wordsMap = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charsMap[char] && charsMap[char] !== word) return false;
    if (wordsMap[word] && wordsMap[word] !== char) return false;

    charsMap[char] = word;
    wordsMap[word] = char;
  }
  return true;
}
// console.log(patternCheck("abba", "dog cat cat dog")); // true
// console.log(patternCheck("abba", "dog cat cat fish")); // false
