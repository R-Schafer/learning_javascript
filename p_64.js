// advanced nullish coalescing

const getTotalSales = (users) => {
  let value = 0;
  users.forEach((user) => {
    return (value += user?.subscription?.info?.value ?? 0);
  });
  return value;
};

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam", subscription: { info: { value: 59 } } },
  { id: 3, name: "Charlie", subscription: { info: { value: 31 } } },
];
console.log(getTotalSales(users));
