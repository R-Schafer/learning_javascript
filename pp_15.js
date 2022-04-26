// fetch wrapper

// get request

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

API.get("/notifications/new.json").then(data => {
    console.log(data);
});

API.get("/chapters/all.json").then(data => {
    console.log(data);
});


// another example 

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "get", // this is also a default, so you can skip it
            headers: {
                // send a header with every GET request
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
}