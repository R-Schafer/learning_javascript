// Async / Await

const getNotificationsCount = async () => {
    const response = await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
    const data = await response.json();
    return data.count;
}

getNotificationsCount().then(data => {
    console.log(data); 
});


// another example


const checkForNewNotifications = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    const data = await response.json()
    console.log(data)
    showNewNotifications(data.count);
}

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}

checkForNewNotifications();