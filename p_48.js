// finding largest consecutive group of 1s

function findMax(nums) {
  let i = 0;
  let newCount = 0;
  let oldCount = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      newCount += 1;
    } else if (newCount > oldCount) {
      oldCount = newCount;
      newCount = 0;
    } else {
      newCount = 0;
    }

    i++;
  }

  if (newCount > oldCount) {
    oldCount = newCount;
  }

  return oldCount;
}

console.log(findMax([1, 1, 0, 1, 0, 0]));
