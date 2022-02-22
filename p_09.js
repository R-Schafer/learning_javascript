// return the odd years
function getOddYears(years) {
  let odd = []

  for (let i = 0; i < years.length; i++) {
    if (years[i] % 2 !== 0) {
      odd.push(years[i])
    }
  }
  return odd
}

console.log(getOddYears([2019, 2020, 2021]))