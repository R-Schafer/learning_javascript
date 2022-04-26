// DOM 
// return the number of links on the page

const getNumberOfLinks = () => {
    const links = document.querySelectorAll("a")
    return links.length
}

console.log(getNumberOfLinks());
