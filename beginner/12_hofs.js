// .indexOf, .forEach, .filter, .map, .reduce, and .sort

var arr = [1, 2, 13, 4, 15, 26];
console.log(arr.indexOf(4));

arr.forEach((v) => {
  console.log(v);
});

// arr = arr.filter(function (v) {
//   return v % 2;
// });

// arr = arr.map(function(v, i, a){
//     return v * 2;
// });

// arr = arr.reduce(function(p, v, i, a){
//     return p * v;
// }, 1);

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr);
