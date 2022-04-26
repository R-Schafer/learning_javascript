// DOM
// blur and focus

// if username is 6 characters long and clicks out of the box add "success" class else add error

const username = document.querySelector("#user-name");

username.addEventListener("blur", () => {
    if (username.value.length >= 6) {
        username.classList.remove("error")
        username.classList.add("success")
    } else {
        username.classList.remove("success");
        username.classList.add("error");
    }
});