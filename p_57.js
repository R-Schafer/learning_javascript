// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// ex: largestSwap(27) ➞ false
// largestSwap(43) ➞ true

function largestSwap(num) {
  const strNum = num.toString().split("").reverse();
  const newNum = Number.parseInt(strNum.join(""), 10);
  return newNum <= num;
}

console.log(largestSwap(14));
console.log(largestSwap(53));
console.log(largestSwap(99));
