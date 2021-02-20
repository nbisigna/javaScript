var set = new WeakSet();
var obj = {};
var obj2 = {};
set.add(obj);
set.add(obj2);
set.delete(obj);
// set = new WeakSet();
console.log(set.has(obj));
console.log(set.has(obj2));
// for (var i of set) console.log(i);
var arr = [];
for (var j = 0; j < 14; j++) {
  var s = new WeakSet();
  for (var i = 0; i < 1024 * 1024 * 16; i++) {
    s.add({ j: i });
  }
  arr.push(s);
}
