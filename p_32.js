// comparing the elements in 2 arrays

function findNums(number) {
  for (let i = 0; i < number.length; i++) {
    if (allSame(number[i])) {
      return true
    }
  }

  return false
}

function allSame(number) {
  for (let j = 0; j < number.length - 1; j++) {
    if (number[j] !== number[j+1]) {
      return false
    }
  }

  return true
}

console.log(findNums([[2, 2, 2], [5, 5, 6]]))


