// fetch - put

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}


// another example

import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://api.learnjavascript.online");

const saveGrade = grade => {
    API.put("/demo/grades.json", {
            grade: grade
    })
    .then(data => {
        console.log(data);
    });
};

const form = document.querySelector("#grades-form");
const userGrade = document.querySelector("#user-grade");

form.addEventListener("submit", event => {
    event.preventDefault();

    saveGrade(userGrade.value);
});
