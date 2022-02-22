// how many items in the array contain an even number of digits.

 function Numbers(nums) {
   let counter = 0
   for (let i = 0; i < nums.length; i++) {
     let numStr = nums[i].toString()
     if (numStr.length % 2 === 0) {
       counter += 1
     }
   }
  return counter
};

console.log(Numbers([12,345,2,61,7896]))
