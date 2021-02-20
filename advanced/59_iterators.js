var arr = [1, 2, 3, 4, 5, 6];
var iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());

console.log(...iter);

var string = 'Hello';
var iter2 = string[Symbol.iterator]();
var done = false;
while (!done) {
  var next = iter2.next();
  console.log(next.value);
  done = next.done;
}

var obj = {};
obj.name = 'Nick';
obj.age = 30;
obj.single = true;

console.log(obj[Symbol.iterator]);

obj[Symbol.iterator] = function* () {
  for (var i in obj) yield [i, obj[i]];
};

for (var i of obj) console.log(i);

var iter3 = obj[Symbol.iterator]();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
