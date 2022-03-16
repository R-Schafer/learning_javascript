// class inheritance

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  canVote() {
    return this.age >= 18;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

  updateConfig() {
    return "Config updated";
  }
}

const user = new User("Sam", "Green", 17);
console.log(user.canVote());
console.log(user.getFullName());
const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote());
console.log(admin.getFullName());
console.log(admin.updateConfig());
