// logging the value using objects.key()

const logValues = course => {
    const keys = Object.keys(course)
    for (let i = 0; i < keys.length; i++) {
        console.log(course[keys[i]])
    }
}

logValues({id: 1, name: "Learn JavaScript", year: 2021});

