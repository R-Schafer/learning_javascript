// DOM
//  return an array of all the paragraphs that have a text that is less than 10 characters.

const getShortTextParagraphs = () => {
    const paragraphs = document.querySelectorAll("p")
    return [...paragraphs].filter(item => item.textContent.length <10)
}


console.log(getShortTextParagraphs());
