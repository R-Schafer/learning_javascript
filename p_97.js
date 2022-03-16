// private class fields

class User {
  #id = "";
  #name = "";

  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }

  get role() {
    return "Customer Service";
  }

  get info() {
    return `Id Number: ${this.#id}, Name: ${this.#name}, Role: ${this.role}`;
  }
}

class Manager extends User {
  get role() {
    return "Manager";
  }
}

const user = new User(1234, "John");
console.log(user.info);

const manager = new Manager(9876, "Jane");
console.log(manager.info);
