// optional chaining

const getPaymentValue = (user) => {
  return user.payment?.details?.value;
};

console.log(getPaymentValue({ id: 1, name: "Alex" }));
console.log(
  getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } })
);

// another example

const getFullName = (user) => {
  return user.info?.name;
};

console.log(getFullName({ info: { name: "Sam" } }));
console.log(getFullName({ info: null }));
console.log(getFullName({}));
