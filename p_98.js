// static method

class Discount {
  constructor() {
    this.amount = 1000;
  }
  applyDiscount() {
    if (Discount.isValid()) {
      this.amount = 500;
    }
  }
  static isValid() {
    return Math.random() <= 0.5;
  }
}

console.log(Discount.isValid());
const discount = new Discount();
discount.applyDiscount();
console.log(discount.amount);
