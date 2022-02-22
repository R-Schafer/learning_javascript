// find how many time potato is written

function potatoes(str) {
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") {
      counter += 1
    }
  }
  return counter/2
}


console.log(potatoes("potato"))
console.log(potatoes("potatopotatopotato"))