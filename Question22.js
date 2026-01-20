/*
Take a number n.
• If n is even, divide it by 2.
• If n is odd, multily it by 3 and add 1.
• Repeat unti n = 1.
• Count the number of steps to reach 1.
Example:
Input:
6
Output:
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)
*/

const collatzSequence = (number) => {
  count = 0;
  let n = number;
  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else if (n % 2 !== 0) {
      n = n * 3 + 1;
    }
    count++;
  }
  return count;
};
// console.log("collatz", collatzSequence(6));
