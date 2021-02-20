// var map = new WeakMap();

// var obj = {};
// var obj2 = {};

// map.set(obj, 'object 1');
// map.set(obj2, 'object 2');
// console.log(map.get(obj));
// map.delete(obj);
// console.log(map.has(obj));
// // for(var [k, v] of map) console.log(k, v);
// map = new WeakMap();

// var obj = {};
// for(var i = 0; i < 1024 * 1024 * 108){
//   obj[i] = 1;
//   delete obj[i];
// }

var arr = [];
for (var j = 0; j < 10; j++) {
  // var map = new Map();
  var map = new WeakMap();
  for (var i = 0; i < 1024 * 1024 * 16; i++) {
    // map.set(i, 1);
    // map.delete(i);
    map.set(new Object({ j: i }), 1);
  }
  arr.push(map);
}
