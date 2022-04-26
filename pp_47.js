// for of

const sumNumbers = numbers => {
    let sum = 0
    for(const number of numbers) {
        sum += number
    }
    return sum
}


console.log(sumNumbers([1, 2, 3, 4, 5])); 
console.log(sumNumbers([10, 4, 6, 3]));


// another example

const people = ["Sam", "Alex"];

for (const person of people) {
    console.log(person);
}