// JSON - handling errors

const checkForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
      
    .then(response =>response.json())
    .then(data => {
        console.log(data)
        showNewNotifications(data.count)
    })
    .catch(error => {
        console.error(error);
    })
}

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}

checkForNewNotifications();


// another example

const getChapters = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
        .then(response => {
            if (!response.ok) {
              throw new Error("API issues.");
            }
          return response.json();
        })
        .then(data => {
          const completedChapters = data.filter(chapter => chapter.isCompleted);
          displayCompletedChapters(completedChapters);
        })
        .catch(error => {
            console.error(error);
    })
}

function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
}

getChapters();