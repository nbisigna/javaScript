function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

console.log(add.call(null, 2, 3));
console.log(add.apply(null, [2, 5]));

var sum = function (x, y) {
  return x + y;
}.call(null, 2, 2);
console.log(sum);

var obj = {
  key: 'value',
  count: 3,
};

function addAll(x, y) {
  return this.count + x + y;
}
console.log(addAll.call(obj, 1, 2));
console.log(addAll.apply(obj, [1, 2]));
