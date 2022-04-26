//  Async 

// generating a random number

const getRandomNumber = async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

getRandomNumber().then(value => {
    console.log(value);
});

