/*
Number Guessing Game
Descriptin:
• The program randomly selects a number between 1 and 100.
• The user must guess the number.
• The program gives hints like “Too High” or “Too Low”.
• Contiue unti the user guesses correctly.
*/
function numberGuessingGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let guess = null;

  while (guess !== secret) {
    const input = prompt("guess a number between 1 and 100:");

    if (input === null) {
      alert("Game cancelled.");
      return;
    }

    guess = input;

    if (guess > secret) alert("Too High!");
    else if (guess < secret) alert("Too Low!");
    else alert("Correct! You guessed it!");
  }
}
// numberGuessingGame();
