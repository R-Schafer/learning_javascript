// DOM
// forms - button only being clicked once

const button = document.querySelector("#my-button")

button.addEventListener("click", event =>{
    event.preventDefault()
    console.log(button.textContent)
}, {
    once: true
})


// removing event listener

const button = document.querySelector("#my-button");

const handleClick = event => {
    console.log(event.currentTarget.textContent);
};

button.addEventListener("click", handleClick);

setTimeout(() => {
    button.removeEventListener("click", handleClick);
}, 1500);
