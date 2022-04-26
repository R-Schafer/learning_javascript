// DOM 
// log the text of every link to the console.


const logLinksTexts = () => {
    const links = document.querySelectorAll("a")

    links.forEach(link => {
        console.log(link.textContent)
    })
}

logLinksTexts();
