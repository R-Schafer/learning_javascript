// determining which function returns the largest number

function whichIsLarger(a, b) {
  if (a > b) {
    return "a";
  } else if (b > a) {
    return "b";
  } else {
    return "same";
  }
}

console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
);
console.log(
  whichIsLarger(
    () => 25,
    () => 25
  )
);
console.log(
  whichIsLarger(
    () => 5050,
    () => 5051
  )
);
