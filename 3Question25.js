/*
Convert Decimal to Binary
Descriptin: Convert a decimal number to its binary representatin.
Example:
Input:
10
Output:
1010
*/

const decimalToBinary = (decimal) => {
  if (decimal === 0) return "0";
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
};
// console.log(decimalToBinary(43)); // "101011"
