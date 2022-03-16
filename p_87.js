// getters and setters

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = Number.parseInt(value, 10);
  }
}

const user = new User("John", "Doe");
console.log(user.fullName());
user.age = "5";
console.log(user.age);
