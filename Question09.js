/*
String Compression
Descriptin: Compress using counts of consecutie characters.
Example:
"aabcccccaaa" → "a2b1c5a3"
*/

const stringCompression = (str) => {
  if (str.length === 0) return "";
  let compressed = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }
  return compressed;
};
