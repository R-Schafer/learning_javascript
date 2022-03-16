// nullish coalescing

const getAge = (user) => {
  return user?.age ?? "unknown";
};

console.log(getAge({ age: 19 }));
console.log(getAge({}));

// another example

const getWelcomeMessage = (user) => {
  return `Welcome ${user.fullName ?? "user"}`;
};

console.log(getWelcomeMessage({ fullName: "Sam Green" }));
console.log(getWelcomeMessage({}));
