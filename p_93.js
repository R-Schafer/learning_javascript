// class inheritance

class User {
  constructor() {
    this._name = null;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("Not valid");
    }
  }
}

const user = new User();
user.name = "John";
console.log(user.name);
