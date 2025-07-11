let number = Math.floor(Math.random() * 100) + 1;

function check() {
  let guess = parseInt(document.getElementById("userGuess").value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === number) {
    document.getElementById("message").textContent = "Correct! You guessed the number.";
  } else if (guess < number) {
    document.getElementById("message").textContent = "Too low. Try again.";
  } else {
    document.getElementById("message").textContent = "Too high. Try again.";
  }
}

function reset() {
  number = Math.floor(Math.random() * 100) + 1;
  document.getElementById("userGuess").value = "";
  document.getElementById("message").textContent = "Game reset. Try guessing the new number.";
}