// JSON Promise chaining

export const getWeather = city => {
    // TODO: fetch the correct url depending on city and call showTemperature with the temperature
        return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
        .then(response => response.json())
        .then(data => {
            showTemperature(data.current.temperature)
        })
}

const result = document.querySelector("#result");
const showTemperature = temperature => {
    result.textContent = `It's ${temperature} degrees celsius.`;



// another example

const getTweetDetails = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json")
    .then(response => response.json())
    .then(data => {
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`
        return showAuthorName(fullName)
    })
}

function showAuthorName(fullName) {
    console.log(fullName);
}

getTweetDetails();