// combining FetchWrapper with DOM
import FetchWrapper from "./fetch-wrapper.js";

const dropdown = document.querySelector("#cities-dropdown")
const result = document.querySelector("#weather-result")
const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/")

dropdown.addEventListener("change", event => {
    API.get(`weatherstack/${dropdown.value}.json`)
    .then(data => {
    const temperature = data.current.temperature;
    result.textContent = `It's ${temperature} degrees celsius.`;
    })
})


// another example with "put"

import FetchWrapper from "./fetch-wrapper.js";

const form = document.querySelector("#grades-form")
const input = document.querySelector("#user-grade")
const API = new FetchWrapper("https://api.learnjavascript.online/")

form.addEventListener("submit", event => {
    event.preventDefault();

    API.put("demo/grades.json", {
        grade: input.value
    })
    .then(data => {
        console.log(data)
    })
})


// another example with "post"

import FetchWrapper from "./fetch-wrapper.js";

const form = document.querySelector("#user-form")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const API = new FetchWrapper("https://api.learnjavascript.online/")

form.addEventListener("submit", event => {
        event.preventDefault()

        API.post("demo/user.json", {
            firstName: firstName.value,
            lastName: lastName.value
        })
        .then(data => {
            console.log(data)
        })
})