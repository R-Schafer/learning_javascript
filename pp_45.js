//  Async / Await

// finding the name of a user

const getTweetDetails = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json')
    const data = await response.json();
    console.log(data)
    const name = `${data.author.details.firstName} ${data.author.details.lastName}`
    showAuthorName(name)

}

function showAuthorName(fullName) {
    console.log(fullName);
}

getTweetDetails();


