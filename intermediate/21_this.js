console.log(this);
var methods = {
  makeNoise: function () {
    return this.sound + ' My name is ' + this.name;
  },
  logThis: function () {
    return this;
  },
};
var Pet = function (name, sound) {
  var pet = Object.create(methods);
  pet.name = name;
  pet.sound = sound;
  return pet;
};

function Dog(name) {
  var sound = 'Barkk!!!';
  var dog = Object.create(Pet(name, sound));
  return dog;
}
var rudy = Dog('Rudy');
console.log(rudy.makeNoise());

function Cat(name) {
  var sound = 'Meow!!!';
  var cat = Object.create(Pet(name, sound));
  return cat;
}
var mittens = Cat('Mittens');
console.log(mittens.makeNoise());
