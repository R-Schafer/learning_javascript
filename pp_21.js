// DOM
// converting a nodeList to an array

const divs = document.querySelectorAll("div"); // NodeList
const items = [...divs]; // Array

// or

const items = [...document.querySelectorAll("div")]; // Array