// find lowercase word in the mix of capital letters

function findWord(letters) {
  let word = ""
  for (let i = 0; i < letters.length; i++ ) {
    if (letters[i] === letters[i].toLowerCase()) {
      word += letters[i]
    }
  }
  return word
}

console.log(findWord("JHDFhDFGoMIUOIUOneLSDFIALSJFLKNyK"))