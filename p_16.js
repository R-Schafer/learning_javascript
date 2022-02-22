//find how much money was saved

function dis(price, discount) {
  return price - (discount / 100 * price)
}

console.log(dis(1500, 50))
console.log(dis(89, 20))
console.log(dis(100, 75))