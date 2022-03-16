// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
  return arr.sort(function (a, b) {
    a.length - b.length;
  });
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
