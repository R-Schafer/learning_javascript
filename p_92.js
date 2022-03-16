// class inheritance

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get role() {
    return "Customer Service";
  }

  info() {
    return `Id Number: ${this.id}, Name: ${this.name}, Role: ${this.role}`;
  }
}

class Manager extends Employee {
  get role() {
    return "Manager";
  }
}

const employee = new Employee(1234, "John Doe");
console.log(employee.info());
console.log(employee.role);

const manager = new Manager(9876, "Jane Doe");
console.log(manager.info());
console.log(manager.role);
