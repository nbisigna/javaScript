var x = 10;
var y = x;

// x = 2;
// y = 2;
// y = changeValue(y);

console.log(x);
console.log(y);

function changeValue(v) {
  console.log(v);
  v = 5;
  return v;
}

var obj1 = { key: 'value' };
var obj2 = obj1;

// obj1.key = 'new value';
// obj2.key = 'new value';
newValue(obj1);

console.log(obj1.key);
console.log(obj2.key);

function newValue(o) {
  o.key = 'new value';
}

var person = { name: 'Nick' };
// var chris = Object.assign({}, person);
var chris = Object.create(person);
chris.name = 'Chris';

console.log(person.name);
console.log(chris.name);

person.greet = function () {
  return 'Hello my name is ' + this.name;
};

console.log(person.greet());
console.log(chris.greet());

console.log(person);
console.log(chris);

console.log(chris.__proto__);
