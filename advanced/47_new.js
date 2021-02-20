function Dog(name) {
  // if (!new.target) return new Dog(name);
  // if (!(this instanceof Dog)) return new Dog(name);
  this.name = name;
}

var rudy = Dog('Rudy');
console.log(rudy);
console.log(name);
