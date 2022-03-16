// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is
// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// Maurice wins if his competing snail's speed strictly exceeds Steve's snail's speed.
// Steve will always play in this order: [f, s, m].
// The order you'll get the snails is always in ascending order.

function mauriceWins(mauriceSnails, steveSnails) {
  if (mauriceSnails[1] > steveSnails[0]) {
    if (mauriceSnails[2] > steveSnails[1]) {
      return true;
    }
  }
  return false;
}

console.log(mauriceWins([3, 5, 10], [4, 7, 11]));
console.log(mauriceWins([6, 8, 9], [7, 12, 14]));
console.log(mauriceWins([1, 8, 20], [2, 9, 100]));
