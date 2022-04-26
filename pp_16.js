// fetch wrapper

import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

const checkForNewNotifications = () => {
    API.get("notifications/new.json")
        .then(data => {
            console.log(data); // visualize it
            showNewNotifications(data.count);
        });
}

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}

checkForNewNotifications();


// another example

import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

export const getWeather = city => {
    API.get(`/weatherstack/${city}.json`)
    .then(data => {
        showTemperature(data.current.temperature)
    });
}

const result = document.querySelector("#result");
const showTemperature = temperature => {
    result.textContent = `It's ${temperature} degrees celsius.`;
}


// another example

import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/")

const getTweetDetails = () => {
    API.get("tweet/1080777336298049537.json")
    .then(data => {
        console.log(data)
        showAuthorName(data.author)
        console.log(data.author.details); // visualize data.author.details
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    })
}

function showAuthorName(fullName) {
    console.log(fullName);
}

getTweetDetails();