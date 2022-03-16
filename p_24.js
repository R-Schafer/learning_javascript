//array concatenation

function listItems(items) {
  const extra = [...items, "milk", "bread"];
  return extra;
}

console.log(listItems(["apples", "bananas"]));
