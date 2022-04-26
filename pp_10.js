// JSON - handling errors - basic boilerplate

fetch("URL")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })


// example

fetch("URL")
    .then(response => {
        if (!response.ok) {
            // 4xx or 5xx error
            throw new Error("API issues.");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
