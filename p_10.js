// remove element from array

function removeElem(elements) {
  elements.splice(1, 1)
  return elements
}

console.log(removeElem(['apple', 'banana', 'organge']))