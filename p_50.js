// takes an array of non-negative integers and strings and return a new array without the strings

function filterArray(arr) {
  let i = 0
  while (i < arr.length) {
    if (typeof arr[i] === 'string') {
      arr.splice(i, 1)
    } else {
      i++
    }
  }
  return arr
}

console.log(filterArray([1, 2, "a", "b"]))
console.log(filterArray([1, "a", "b", 0, 15]))
console.log(filterArray([1, 2, "aasf", "1", "123", 123]))