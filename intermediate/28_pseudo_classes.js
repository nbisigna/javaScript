var Car = function () {
  this.doors = 4;
  this.wheels = 4;
  //   return this;
};

// var car = Car();
var car = new Car();

console.log(car);
console.log(this);
