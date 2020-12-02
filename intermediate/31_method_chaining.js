function Calculator(num) {
  this.num = num;
}
var methods = {
  add: function (x) {
    this.num += x;
    return this;
  },
  sub: function (x) {
    this.num -= x;
    return this;
  },
  mul: function (x) {
    this.num *= x;
    return this;
  },
  div: function (x) {
    this.num /= x;
    return this;
  },
};

Calculator.prototype = Object.create(methods);
Calculator.prototype.constructor = Calculator;

var calc = new Calculator(1).add(2).sub(1).mul(4).div(2);
console.log(calc.num);
