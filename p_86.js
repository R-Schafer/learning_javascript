// getters and setters

class User {
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = Number.parseInt(value, 10);
  }
}

const user = new User();
user.age = "18";
console.log(user.age);
user.age = "31";
console.log(user.age);

// another example

class Tasks {
  constructor(todos) {
    this._todos = todos;
  }
  get todos() {
    return this._todos.join(", ");
  }
}

const tasks = new Tasks(["Laundry", "Clean kitchen", "Take dog for walk"]);
console.log(tasks.todos);

// another example - making sure payment are in cents

class Payment {
  constructor(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount * 100;
  }

  set amount(v) {
    this._amount = v;
  }
}

const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
