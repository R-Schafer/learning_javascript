const longestCommonPrefix = function (strs) {
  let word = ""
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] !== strs[j][i]) {
        return word;
      }
    }
    word += strs[0][i]
  }

  return word;
};

console.log(longestCommonPrefix(["fat", "fa", "fault"]))

