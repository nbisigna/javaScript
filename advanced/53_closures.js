function count() {
  var num = 0;
  return function () {
    return num++;
  };
}

var rtn = count();
rtn();
rtn();
rtn();
console.log(rtn());

var arr = [];

for (var i = 0; i < 3; i++) {
  (function (i) {
    var func = function () {
      return i;
    };
    arr.push(func);
  })(i);
}

for (var f of arr) console.log(f());

function myClass() {
  var private = 10;
  this.get = function () {
    return private;
  };
  this.set = function (v) {
    private = v;
  };
}
var cls = new myClass();
console.log(cls.get());
cls.set(1);
console.log(cls.get());
