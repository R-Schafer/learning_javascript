// function that takes a number as an argument and returns the highest digit in that number.

function highestDigit(number) {
  let strNum = number.toString();
  let bigNum = 0;
  for (let i = 0; i < strNum.length; i++) {
    let newNum = parseInt(strNum[i], 10);
    if (newNum > bigNum) {
      bigNum = newNum;
    }
  }
  return bigNum;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
