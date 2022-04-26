// JSON Promise chaining

const getChapters = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    })
}

function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
}

getChapters();