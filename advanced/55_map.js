var obj = {};
obj[10] = 'number';
obj['10'] = 'string';
console.log(obj[10]);

var map = new Map();
map.set(10, 'number');
map.set('10', 'string');
console.log(map.get(10));
console.log(map.get('10'));

function func() {}
var func1 = new func();
var func2 = new func();

obj[func1] = 'class 1';
obj[func2] = 'class 2';
console.log(obj[func1]);

map.set(func1, 'class 1');
map.set(func2, 'class 2');
console.log(map.get(func1));

console.log(map.size);

for (var [k, v] of map) console.log(k, v);
for (var i in obj) console.log(i, obj[i]);

console.log(map.has(10));
console.log(10 in obj);

map.delete(10);
delete obj[10];

console.log(map.has(10));
console.log(10 in obj);

console.log(map);
map.clear();
console.log(map);

console.log(obj);
obj = null;
console.log(obj);
