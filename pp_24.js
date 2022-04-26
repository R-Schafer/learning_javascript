// DOM
// inner HTML vs textContent
// the name is trusted in this example

const setWelcomeMessage = name => {
        document.querySelector("#welcome-message").innerHTML = `Hello <strong>${name}</strong>`;
}

setWelcomeMessage("Sam");
setWelcomeMessage("Alex");
