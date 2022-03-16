// Set the isVerified field to true for user.

const verifyUser = (users, userId) => {
  const user = users.find((user) => user.id === userId);
  user.isVerified = true;
};

const users = [
  {
    id: 1,
    name: "Sam",
    isVerified: false,
  },
  {
    id: 2,
    name: "Alex",
    isVerified: false,
  },
  {
    id: 3,
    name: "Charlie",
    isVerified: false,
  },
];
verifyUser(users, 2);
console.log(users);
