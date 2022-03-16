// incrementAge such that it adds 1 to the current age from the user parameter it receives.

const incrementAge = (user) => {
  user.age += 1;
};

const sampleUser = {
  id: 1,
  age: 23,
};
incrementAge(sampleUser);
console.log(sampleUser);
