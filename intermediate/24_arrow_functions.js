function add(x, y) {
  return x + y;
}
var add = (x, y) => x + y;

console.log(add(1, 2));
var double = (x) => 2 * x;
console.log(double(4));

function Pet(name) {
  this.sound = 'Roar';
  return {
    name: name,
    sound: 'Roar!!!',
    makeNoise: () => this.sound,
  };
}
function Dog(name) {
  var dog = Object.create(Pet(name));
  dog.sound = 'Bark!!!';
  return dog;
}
var rudy = Dog('Rudy');
console.log(rudy.makeNoise());
