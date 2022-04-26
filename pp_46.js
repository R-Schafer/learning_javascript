//  Async / Await

// adding to an API

const saveGrade = async grade => {
    const response = await fetch("https://api.learnjavascript.online/demo/grades.json", {
        method: "put",
        body: JSON.stringify({
            grade: grade
        })
    });
    const data = await response.json();
    console.log(data);
};

// Sample usage - do not modify
const form = document.querySelector("#grades-form");
const userGrade = document.querySelector("#user-grade");

form.addEventListener("submit", event => {
    event.preventDefault();

    saveGrade(userGrade.value);
});