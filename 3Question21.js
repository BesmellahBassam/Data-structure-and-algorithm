/*
Password Strength Checker
Descriptin: A strong password must:
• Be at least 8 characters long.
• Contain at least one uppercase lettr, one lowercase lettr, and one number.
Example:
Input:
MyPass123
Output:
Strong
Input:
pass
Output:
Weak
*/

const passwordStrength = (password) => {
  if (password.length < 8) return "Weak";

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;

  for (const char of password) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      hasUppercase = true;
    }
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      hasLowercase = true;
    }
    if (!isNaN(char) && char !== " ") {
      hasNumber = true;
    }
  }

  return hasUppercase && hasLowercase && hasNumber ? "Strong" : "Weak";
};
// console.log(passwordStrength("MyPass123"));
