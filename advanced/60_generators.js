function* generator() {
  yield 1;
  for (var i = 2; i < 10; i++) {
    yield i;
  }
}
var gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* generator2() {
  // yield* gen;
  yield* 'Hello';
}
var gen2 = generator2();
console.log(gen2.next());
console.log(gen2.next());

function* generator3() {
  console.log(yield 1);
  var num = yield 2;
  yield 3;
  yield num;
  return null;
  yield 4;
}

var gen3 = generator3();
console.log(gen3.next());
console.log(gen3.next('Hello'));
console.log(gen3.next(100));
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
