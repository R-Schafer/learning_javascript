//sorting, grabbing smallest and biggest number

function number(arr) {
  arr.sort((a, b) => a - b);

  return [arr[0], arr[arr.length - 1]]
}

console.log(number([100,5,40,20]))