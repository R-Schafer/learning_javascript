// turning an object into an array

function toArray(obj) {
  const newArray = Object.entries(obj);
  return newArray;
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
