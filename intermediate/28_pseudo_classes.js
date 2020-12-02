function Pet(name) {
  this.name = name;
}
function Dog(name) {
  Pet.call(this, name);
}
var rudy = new Dog('Rudy');
console.log(rudy.name);
