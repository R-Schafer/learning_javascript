//sorting drinks by their price

function sortDrinkByPrice(drinks) {
	return drinks.sort((a, b) => {
    return a.price - b.price
  })
}

console.log(sortDrinkByPrice([
  {name: "milk", price: 10},
  {name: "coke", price: 50},
  {name: "water", price: 5},]))