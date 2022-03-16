// counting specific characters - case sensitive

// function charCount(myChar, str) {
//   let counter = 0
// 	for (let i = 0; i < str.length; i++) {
//     if (str[i] === myChar) {
//       counter += 1
//     }
//   }
//   return counter
// }

// console.log(charCount("a", "edabit"))
// console.log(charCount("c", "Chamber of secrets"))
// console.log(charCount("b", "big fat bubble"))

// counting specific characters - not case sensitive

function charCount(myChar, str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar || str[i].toLowerCase() === myChar) {
      counter += 1;
    }
  }
  return counter;
}

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "Big Fat Bubble"));
