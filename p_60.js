// advanced optional chaining

const getFirstGrade = (data) => {
  return data.results?.grades?.[0];
};

console.log(getFirstGrade({ results: { grades: [18, 14, 19] } }));
console.log(getFirstGrade({ results: {} }));
console.log(getFirstGrade({}));

// another example
const getFullName = (user) => {
  return user.info?.name?.toLowerCase();
};

console.log(getFullName({ info: { name: "ALEX" } }));
console.log(getFullName({ info: null }));
console.log(getFullName({}));
