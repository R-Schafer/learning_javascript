//getting key that is inside a variable

function getValue(user, keyToRead) {
  return user[keyToRead]
}

console.log(getValue({id: 2, name: "Sam"}, "name"))
console.log(getValue({id: 2, name: "Sam"}, "id"))