// real example of using API for https://www.exchangerate-api.com/
// shows exchange rates

import FetchWrapper from "./fetch-wrapper.js"

const base = document.querySelector("#base-currency")
const target = document.querySelector("#target-currency")
const result = document.querySelector("#conversion-result");
const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/API-KEY")

const getConversionRates = () => {
    API.get(`/latest/${base.value}`)
    .then(data => {
        result.textContent = data.conversion_rates[target.value];
    });
};

base.addEventListener("change", () => {
    getConversionRates();
});
target.addEventListener("change", () => {
    getConversionRates();
});