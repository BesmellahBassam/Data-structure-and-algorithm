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
  if (password.length < 8) return "There should be at least 8 chars";
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (hasUppercase && hasLowercase && hasNumber) {
    return "Strong";
  } else {
    return "Weak";
  }
};

// console.log(passwordStrength("MyPass123"));
