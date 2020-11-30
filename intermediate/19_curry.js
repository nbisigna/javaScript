function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(1, 2, 3));

function currySum(z) {
  return function (y) {
    return function (x) {
      return x + y + z;
    };
  };
}
console.log(currySum(3)(2)(1));
