// DOM
// as a rule of thumb, whenever you'd like to read the value written inside of an <input>, a <select>, or a <textarea> you have to access the value property.

const getUserName = () => {
    const name = document.querySelector("#user-name")
    return name.value
}


// empty the name value

const emptyUserName = () => {
    const name = document.querySelector("#user-name")
    return name.value = ""
}