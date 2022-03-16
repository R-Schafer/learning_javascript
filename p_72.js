// returns a CSV string of the names of the users that are verified.

const exportVerifiedUsers = (users) => {
  const verifiedUsers = users.filter((user) => user.isVerified);
  return verifiedUsers.map((user) => user.name).join(", ");
};

const sampleUsers = [
  {
    name: "Sam",
    isVerified: true,
  },
  {
    name: "Alex",
    isVerified: false,
  },
  {
    name: "Charlie",
    isVerified: true,
  },
];
console.log(exportVerifiedUsers(sampleUsers));
