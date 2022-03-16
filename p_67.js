// return names from an array of objects

const logNames = (users) => {
  users.forEach((user) => {
    console.log(`${user.firstName} ${user.lastName}`);
  });
};

const sampleUsers = [
  {
    id: 1,
    firstName: "Sam",
    lastName: "Green",
  },
  {
    id: 2,
    firstName: "Alex",
    lastName: "Blue",
  },
];
logNames(sampleUsers);
