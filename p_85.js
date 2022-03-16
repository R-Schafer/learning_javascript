// creating a class

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

console.log(new Person("Sam", "Blue", 18));
console.log(new Person("Alex", "Green", 25));

// another example of a class

class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  getDescription() {
    if (this.isCompleted) {
      return `You completed the ${this.name} course.`;
    } else {
      return `You are currently studying the ${this.name} course.`;
    }
  }
}

const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription());
const course2 = new Course("Learn Programming", true);
console.log(course2.getDescription());

// another example of a class

class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }

  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`;
  }
  canVote() {
    return this.age >= 18;
  }
}

const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false
