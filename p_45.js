// Number.parseInt() - turning string to a number

function flip(y) {
	if (Number.parseInt(y, 10) === 1) {
    return 0
  }
  return 1
}

console.log(flip("0"))
console.log(flip("1"))

