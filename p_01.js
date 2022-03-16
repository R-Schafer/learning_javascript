// adding the numbers up to a single number

function addNums(num) {
  let sum = num;
  while (num > 0) {
    num = num - 1;
    sum += num;
  }
  return sum;
}

console.log(addNums(5));
