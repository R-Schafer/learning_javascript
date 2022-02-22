//reduce multiply

function getNum(numbers) {
  return numbers.reduce((total, current) => {
    return total * current
  })
}

console.log(getNum([5, 2, 10]))