// DOM
// Attributes

// getAttribute
const button = document.querySelector("#login");
button.getAttribute("disabled");

// removeAttribute
button.removeAttribute("disabled");

// setAttribute(key, value)
// <button id="login">Login</button>   =>
// <button disabled="disabled" id="login">Login</button>
button.setAttribute("disabled", "disabled");

// hasAttribute(key)
button.hasAttribute("disabled"); // true or false