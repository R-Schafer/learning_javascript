// function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));
