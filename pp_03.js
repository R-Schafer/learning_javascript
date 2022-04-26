// implementing promises & reject


const fakeFetch = endpoint => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({departed: false, delayed: true})
    }, 1000)
    if (endpoint !== "flight-status") {
      reject("endpoint not supported")
    }
  })
}

fakeFetch("flight-status")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

fakeFetch("user-details")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


// another example

const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You asked me to fail after ${milliseconds}ms and I did!`)
        }, milliseconds)
    })
}

failAfter(1500).catch(error => {
    console.error(error);
});