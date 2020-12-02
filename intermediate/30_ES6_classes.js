class Pet {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return 'Roar!!!';
  }
}
class Dog extends Pet {
  constructor(name, age) {
    super(name);
    this._age = age;
  }
  get age() {
    console.log(this._age);
    return this._age;
  }
  set age(age) {
    console.log(this._age);
    this._age = age;
  }
}
var rudy = new Dog('Rudy', 4);
console.log(rudy.age);
rudy.age = 5;
console.log(rudy.makeSound());
var sparky = new Dog('Sparky');
console.log(sparky.makeSound === rudy.makeSound);
