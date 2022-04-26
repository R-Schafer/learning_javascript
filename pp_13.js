// fetch get/post/put/delete

const saveGrade = grade => {
    return fetch("https://api.learnjavascript.online/demo/grades.json", {
        method: "PUT",
        body: JSON.stringify({
            grade: grade
        })
    })
    .then(response =>response.json())
    .then(data => {
        console.log(data)
    })

};

const form = document.querySelector("#grades-form");
const userGrade = document.querySelector("#user-grade");

form.addEventListener("submit", event => {
    event.preventDefault();

    saveGrade(userGrade.value);
});



// another example

const updateUserProfile = (firstName, lastName) => {
    return fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
        body: JSON.stringify({
            firstName: firstName, lastName: lastName
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

const form = document.querySelector("#user-form");
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");

form.addEventListener("submit", event => {
    event.preventDefault();

    updateUserProfile(fName.value, lName.value);
});
