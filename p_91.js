// class inheritance

class Phone {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
  getDescription() {
    return `The ${this.type} costs ${this.price}`;
  }
}
class iOS extends Phone {
  getVersion() {
    return 15;
  }
}
class Android extends Phone {
  getVersion() {
    return 12;
  }
}

const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription());
console.log(galaxy.getVersion());
const iphone = new iOS("iPhone", 500);
console.log(iphone.getDescription());
console.log(iphone.getVersion());
