// using .reduce() on an array of objects - multiplying

const getProduct = (recordings) => {
  return recordings.reduce((total, current) => {
    return total * current.value;
  }, 1);
};

const sampleRecordings = [
  {
    value: 2,
  },
  {
    value: 5,
  },
];
console.log(getProduct(sampleRecordings));
