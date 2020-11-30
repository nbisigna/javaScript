function add(x, y) {
  return x + y;
}

var four = add.bind(null, 2, 2);

console.log(four());

function Pet(name) {
  var pet = {};
  pet.name = name;
  pet.sound = 'Roar!!!';
  pet.makeNoise = function () {
    return this.sound;
  }.bind(pet);
  // pet.makeNoise = pet.makeNoise.bind(pet);
  return pet;
}
function Dog(name) {
  var dog = Object.create(Pet(name));
  dog.sound = 'Bark!!!';
  return dog;
}
var rudy = Dog('Rudy');
console.log(rudy.makeNoise());
