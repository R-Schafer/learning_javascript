// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus. You can't go backwards. Can you reach your friend's tile number in the next roll?

function possibleBonus(a, b) {
  if (a > b) {
    return false;
  } else if (a + 6 >= b) {
    return true;
  } else {
    return false;
  }
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
