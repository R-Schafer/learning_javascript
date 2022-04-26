// setTimeout

const delayedWelcome = name => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
    }, 2000);    
}

delayedWelcome("Sam");
delayedWelcome("Alex");


// another example

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");