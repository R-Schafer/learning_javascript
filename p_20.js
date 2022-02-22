//reduce sum

function sumNums(numbers) {
  return numbers.reduce((total, current) => {
    return total + current
  })
}

console.log(sumNums([10, 20, 30]))