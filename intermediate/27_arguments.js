function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => a + b);
}
function sum() {
  return [...arguments].reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));
