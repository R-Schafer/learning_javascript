// implementing promises

const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}

wait(1000).then(() => {
    console.log("Done waiting.");
});

// another example

const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000);
    });
}

waitOneSecond().then(() => {
    console.log("Done waiting.");
});


// another example
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({departed: false, delayed: true})
        }, 1000)
    })
}

fakeFetch().then((data) => {
    console.log(data);
});