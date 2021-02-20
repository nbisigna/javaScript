var apple = {
  get value() {
    return this.color;
  },
  set value(v) {
    this.color = v;
  },
};
var person = { color: 'blue' };
console.log(Reflect.set(apple, 'value', 'green', person));
console.log(Reflect.get(apple, 'value', person));
console.log(Reflect.set(apple, 'color', 'red'));
console.log(Reflect.get(apple, 'color'));
apple.color = 'red';
apple[Symbol()] = 'symbol';
console.log(Reflect.deleteProperty(apple, 'color'));
console.log(Reflect.preventExtensions(apple));
console.log(Reflect.isExtensible(apple));
// console.log(Object.defineProperty(apple, 'color', { value: 'green' }));
console.log(Reflect.defineProperty(apple, 'color', { value: 'green' }));
console.log(Reflect.has(apple, 'color'));
console.log(Reflect.getOwnPropertyDescriptor(apple, 'color'));
// console.log(Object.getOwnPropertyNames(apple));
// console.log(Object.getOwnPropertySymbols(apple));
console.log(Reflect.ownKeys(apple));

function Pet(name) {
  this.name = name;
}
Pet.prototype.bark = function () {
  return 'Bark!';
};
function Dog(name) {
  //   Pet.call(this, name);
  //   Reflect.apply(Pet, this, [name]);
  return Reflect.construct(Pet, [name], Pet);
}
// Dog.prototype = Object.create(Pet.prototype);
// // Dog.prototype.constructor = Dog;
// console.log(Object.setPrototypeOf(Dog.prototype, Pet.prototype));
// console.log(Reflect.setPrototypeOf(Dog.prototype, Pet.prototype));
console.log(Dog.prototype.constructor);
var rudy = new Dog('Rudy');
console.log(rudy.name);
console.log(rudy.bark());
// console.log(Object.getPrototypeOf('a'))
// console.log(Reflect.getPrototypeOf('a'))
