/*
Menu-Based ATM System
Descriptin: Handle optins for balance, withdraw, deposit, exit.
Example: "100 withdrawn successfully"
*/

// ATM System

// Initial balance
let balance = 1000;

// Check Balance
function checkBalance() {
  console.log(` current balance is: $${balance}`);
  return balance;
}

// Get money
function withdraw(amount) {
  if (amount <= 0) {
    console.log("Please enter a valid amount!");
    return false;
  }

  if (amount > balance) {
    console.log("Insufficient balance!");
    return false;
  }

  balance -= amount;
  console.log(`$${amount} withdrawn successfully`);
  console.log(`Remaining balance: $${balance}`);
  return true;
}

// Deposit money
function deposit(amount) {
  if (amount <= 0) {
    console.log("Please enter a valid amount!");
    return false;
  }

  balance += amount;
  console.log(`$${amount} deposited successfully`);
  console.log(`New balance: $${balance}`);
  return true;
}

// Example usage:
// checkBalance();
// withdraw(100);
// deposit(500);
// withdraw(2000);
// checkBalance();
