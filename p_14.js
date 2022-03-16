//calling a function inside a function
function whichIsLarger(f, g) {
  f = f();
  g = g();

  if (f > g) {
    return "f";
  } else if (f < g) {
    return "g";
  }
  return "neither";
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
    () => 505050,
    () => 5050
  )
);
