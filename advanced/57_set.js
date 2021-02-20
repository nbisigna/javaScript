var obj = {};
obj[10] = 1;
obj['10'] = 1;

var func = function () {};
var func2 = function () {};

obj[func] = 1;
obj[func2] = 1;

console.log(obj);

var set = new Set();
set.add(10);
set.add('10');
set.add(func);
set.add(func2);
set.add(10);
set.delete(10);
console.log(set.has(10));
set.clear();

for (var i of set) console.log(i);

var arr = [1, 1, 2, 2, 3, 3];
console.log([...new Set(arr)]);
