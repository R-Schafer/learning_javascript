// DOM
// toggle the class active when button is clicked

const button = document.querySelector("#my-button")

button.addEventListener("click", e =>{
    const element = e.currentTarget
    console.log(element.classList.toggle("active"))
})

// or

button.addEventListener("click", event => {
    event.currentTarget.classList.toggle("active");
});