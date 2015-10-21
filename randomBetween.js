// return random number in range

function randomBetween(min, max) {
  // Make myFunction return a random number between min and max values instead of a decimal
  // Only change code below this line.

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
