// summing grade from an array of objects

const getSumOfGrades = (results) => {
  let sum = 0;
  results.forEach((result) => {
    return (sum += result.grade);
  });
  return sum;
};

const results = [
  {
    date: "2018-12-13",
    grade: 14,
  },
  {
    date: "2018-12-15",
    grade: 18,
  },
];
console.log(getSumOfGrades(results));
