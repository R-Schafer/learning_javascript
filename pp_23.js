// DOM
// inner HTML vs textContent
// the message is not trusted in this example

// html:
<p id="welcome-message">Hello <strong id="name"></strong></p>

// program:

const setWelcomeMessage = name => {
    document.querySelector("#name").textContent = name;
}

setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");