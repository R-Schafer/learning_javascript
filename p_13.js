// returning the number of items in the list

function getCount(items) {
  let count = items.split(",");
  return count.length;
}

console.log(getCount("Laundry, Wash dishes, Clean table"));
console.log(getCount("Feed cat, Degrease bike chain"));
