// getting average age from array of objects

const getAverageAge = (users) => {
  let age = 0;
  users.forEach((user) => {
    return (age += user.age);
  });
  return age / users.length;
};

const users = [
  {
    joined_on: "2018-12-13",
    age: 14,
  },
  {
    joined_on: "2018-12-15",
    age: 18,
  },
];
console.log(getAverageAge(users));
