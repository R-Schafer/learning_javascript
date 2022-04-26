// DOM
// classList


// adding a class (can add more than one with a comma)
const element = document.querySelector("#first-item");
element.classList.add("highlighted");

// removing a class (can remove more than one with a comma)
const element = document.querySelector("#first-item");
element.classList.remove("highlighted");

// toggle (will add and remove)
const element = document.querySelector("#first-item");
element.classList.toggle("highlighted");

// replace a class with a new one
const element = document.querySelector("#first-item");
element.classList.add("highlighted");