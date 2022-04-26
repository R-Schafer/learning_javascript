// JSON

const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    };
    const string = JSON.stringify(data)
    return string
}

console.log(prepareStatus("My first post!", "Amsterdam")); 
console.log(prepareStatus("Hello World!", "Berlin")); // 