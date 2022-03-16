// private class fields

class User {
  #votingAge = 18;

  get votingAge() {
    return this.#votingAge;
  }

  set votingAge(age) {
    if (age >= 18) {
      this.#votingAge = age;
    }
  }
}

const user = new User();
console.log(user.votingAge);
user.votingAge = 10;
console.log(user.votingAge);
user.votingAge = 20;
console.log(user.votingAge);
