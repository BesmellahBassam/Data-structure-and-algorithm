/*
All Permutatins of a String
Descriptin: Generate all permutatins.
Input: "abc" → abc, acb, bac, ...
*/

function getAllPermutations(str) {
  if (str.length <= 1) return [str];

  const result = [];

  // For each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    const perms = getAllPermutations(remaining);

    for (const perm of perms) {
      result.push(char + perm);
    }
  }
  return result;
}

// Example usage
// console.log(getAllPermutations("abc"));
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
