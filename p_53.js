// function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));
