// In summary, here's a fetch (Put/Post/Delete) boilerplate

fetch(URL, {
    method: "POST", // or PUT or DELETE
    body: JSON.stringify({
        key1: 'value1', // replace with key/value based on documentation
        key2: 'value2', // same as above (if needed)
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read server response
})
.catch(error => {
    console.error(error);
});