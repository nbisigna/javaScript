function paint(c) {
  return function (car) {
    car.color = c;
  };
}
var Car = function () {
  var car = { wheels: 4 };
  paint('red')(car);
  return car;
};
var aCar = { wheels: 4 };
paint('blue')(aCar);
console.log(aCar);
var myCar = Car();
console.log(myCar);
