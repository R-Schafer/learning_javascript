// Object.key - capitalize the keys

const getUpperCasedProperties = (course) => {
  return Object.keys(course).map((key) => key.toUpperCase());
};

console.log(
  getUpperCasedProperties({ id: 1, name: "Learn JavaScript", year: 2021 })
);
console.log(
  getUpperCasedProperties({ name: "Learn JavaScript", category: "Programming" })
);
