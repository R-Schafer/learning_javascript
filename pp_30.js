// DOM 
// currentTarget

const button = document.querySelector("#my-button")

button.addEventListener("click", e => {
    console.log(e.currentTarget.textContent)
})
