// advanced nullish coalescing

const getFullName = (user) => {
  return user.info?.name ?? "N/A";
};

console.log(getFullName({ info: { name: "Sam" } }));
console.log(getFullName({ info: null }));
console.log(getFullName({}));

// another example

const getPaymentValue = (user) => {
  return user.payment?.details?.value ?? 0;
};

console.log(getPaymentValue({ id: 1, name: "Alex" }));
console.log(
  getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } })
);

// another example

const getFullName = (user) => {
  return user.info?.name?.toLowerCase() ?? "user";
};

console.log(getFullName({ info: { name: "ALEX" } }));
console.log(getFullName({ info: null }));
console.log(getFullName({}));
