// JSON

// Just like how fetch(URL) returns a promise, the response.json() method also returns a promise. 

fetch("URL")
.then(response => response.json())
.then(data => {
    console.log(data);
});

// Calling .then() on the result of .then() is called promise chaining.

// another example

const checkForNewNotifications = () => {
     return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        showNewNotifications(data.count)
    })
}

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}

checkForNewNotifications();
