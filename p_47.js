// checking if the first array can be nested inside the second.

function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr2Min = Math.min(...arr2);

  if (arr1Min > arr2Min) {
    let arr1Max = Math.max(...arr1);
    let arr2Max = Math.max(...arr2);

    if (arr1Max < arr2Max) {
      return true;
    }
  }
  return false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
