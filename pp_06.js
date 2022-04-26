// JSON returns a promise

// Before refactoring (no implicit return)
fetch("URL")
    .then(response => {
        return response.json();
    });

// After refactoring (with implicit return)
fetch("URL")
    .then(response => response.json());


