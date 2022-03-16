// dynamic properties

const user = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const key = "id";
console.log(user[key]);

// another example
const getValue = (user, keyToRead) => {
  return user[keyToRead];
};

console.log(getValue({ id: 2, name: "Sam" }, "name"));
console.log(getValue({ id: 2, name: "Sam" }, "id"));
