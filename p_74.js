// using .reduce() on an array of objects - adding

const getCartTotal = (products) => {
  return products.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
};

const sampleProducts = [
  {
    price: 10,
    quantity: 3,
  },
  {
    price: 5,
    quantity: 4,
  },
];
console.log(getCartTotal(sampleProducts));
