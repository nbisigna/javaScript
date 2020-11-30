function Pet(name, age) {
  this.name = name;
  this.age = age;
  this.makeNoise = function () {
    return 'Roar!!!';
  };
}

// Pet.prototype.makeNoise = function () {
//   return 'Roar!!!';
// };

var fido = new Pet('Fido', 3);
console.log(fido);
console.log(fido.makeNoise());

var spot = new Pet('Spot', 3);
console.log(spot.makeNoise());

console.log(spot.makeNoise === fido.makeNoise);
