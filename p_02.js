// find the smallest and biggest number

function findNums(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });
  return [numbers[0], numbers[numbers.length - 1]];
}

console.log(findNums([4, 2, 3, 5, 1]));
