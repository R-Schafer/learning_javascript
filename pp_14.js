// fetch get/post/put/delete + header
// header clarifies the type of content (aka json) & there are multiple headers available


fetch(URL, {
    method: "POST", // or PUT or DELETE
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        key1: 'value1', // replace with key/value based on documentation
        key2: 'value2', // same as above (if needed)
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read server response
});