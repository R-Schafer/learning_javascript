//counting properties in object

function getCountProperties(course) {
  const keys = Object.keys(course);
  return keys.length;
}

console.log(
  getCountProperties({
    id: 1,
    name: "Learn JavaScript",
    year: 2021,
    category: "Programming",
  })
);
console.log(
  getCountProperties({ name: "Learn JavaScript", category: "Programming" })
);
console.log(getCountProperties({}));
