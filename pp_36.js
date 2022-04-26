// DOM
// forms - getting the input from user


const form = document.querySelector("#login-form")
const email = document.querySelector("#login-email")
const password = document.querySelector("#login-password")

form.addEventListener("submit", event => {
    event.preventDefault();

  // looking at the input
  console.log(email.value)
  console.log(password.value)

    processLogin(email.value,password.value)
})

function processLogin(email, password) {}


// another example

const form = document.querySelector("#register-form")
const name = document.querySelector("#register-name")
const email = document.querySelector("#register-email")
const password = document.querySelector("#register-password")


form.addEventListener("submit", event => {
    event.preventDefault()
    completeRegistration(name.value, email.value, password.value)

})

function completeRegistration(name, email, password) {
    console.log({name, email, password});
}