// Super! classes

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.role = "Customer Service";
  }

  get info() {
    return `Id Number: ${this.id}, Name: ${this.name}, Role: ${this.role}`;
  }
}

class Manager extends User {
  constructor(id, name) {
    super(id, name);
    this.role = "Manager";
  }
}

const user = new User(1234, "John");
console.log(user.info);

const manager = new Manager(9876, "Jane");
console.log(manager.info);

console.log(user.role);
console.log(manager.role);
