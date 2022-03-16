// find the amount of digits in a number

function num_of_digits(num) {
  const numStr = num.toString();
  return numStr.length;
}

console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));
