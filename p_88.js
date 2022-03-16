// getters and setters

class Menu {
  constructor(meal, calories) {
    this.meal = meal;
    this.calories = calories;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = Number.parseInt(value, 10);
  }

  item() {
    return `${this.meal}, ${this.calories}, ${this._price}`;
  }
}

const menu = new Menu("taco", 80);
menu.price = "3";
console.log(menu.item());

const menu2 = new Menu("burrito", 200);
menu2.price = "9";
console.log(menu2.item());
