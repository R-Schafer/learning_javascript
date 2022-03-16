// deconstruct an array

function getFullName(name) {
  const [first, last] = name;
  return `${first} ${last}`;
}

console.log(getFullName(["Charlie", "Johnson"]));
