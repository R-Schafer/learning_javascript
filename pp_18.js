// fetch - put/post/delete

// The _send() method takes the method ("put", "post", or "delete") followed by the endpoint and the body.

class FetchWrapper {
    // constructor() and get()

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: method, // this is now dynamic
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}


// So, now, we can implement the put(), post(), and delete() methods that call this internal _send() method:

class FetchWrapper {
    // constructor() and get()

    put(endpoint, body) {
        // pass the endpoint and body parameters to _send
        // and specify the method to be 'put'
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        // pass the endpoint and body parameters to _send
        // and specify the method to be 'post'
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        // pass the endpoint and body parameters to _send
        // and specify the method to be 'delete'
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method, // object shorthand
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
Not useful
Useful

