function Dog(name) {
  //   if (!new.target) return new Dog(name);
  if (!(this instanceof Dog)) return new Dog(name);
  this.name = name;
}

var rudy = Dog('Rudy');
console.log(rudy);

var obj = {};
var obj2 = new Object({ key: 'value' });
console.log(obj);
console.log(obj2);

var arr = [10];
var arr2 = new Array(10);
console.log(arr);
console.log(arr2);

var func = new Function('x', 'y', 'return x + y');
console.log(func(1, 2));

var regex = new RegExp(/\d+/);
console.log('Nick123'.match(regex));

// Not Scope Safe
var date = new Date();
console.log(date.getTime());
console.log(Date.now());

var str = new String();
console.log(str);
console.log(typeof str);

var num = new Number();
console.log(num);
console.log(typeof num);

var bool = new Boolean();
console.log(bool);
console.log(typeof bool);

var sym = Symbol();
console.log(sym);
