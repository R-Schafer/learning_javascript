// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
// ex:
// indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)

function indexShuffle(str) {
  let even = "";
  let odd = "";
  let i = 0;
  while (i < str.length) {
    if (i % 2 === 0) {
      even += str[i];
      i++;
    } else {
      odd += str[i];
      i++;
    }
  }
  return even + odd;
}

console.log(indexShuffle("abcdefg"));
console.log(indexShuffle("holiday"));
console.log(indexShuffle("maybe"));
