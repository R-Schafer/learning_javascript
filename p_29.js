//object.key() and looping through

const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
//console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    console.log(settings[key]);
});