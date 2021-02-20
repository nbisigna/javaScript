var obj = {};
obj[Symbol.asyncIterator] = async function* () {
  for (var i = 0; i < 3; i++) {
    yield new Promise((resolve) => {
      setTimeout(function () {
        resolve(i);
      }, 2000);
    });
  }
};
var iter = obj[Symbol.asyncIterator]();

async function iterate() {
  //   for await (var i of iter) console.log(i);
  console.log(await iter.next());
  console.log(await iter.next());
  console.log(await iter.next());
}
// iterate();

async function* generator() {
  //   for await (var i of iter) yield i;
  yield* iter;
}

var gen = generator();

async function generate() {
  //   for await (var i of gen) console.log(i);
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
}
generate();
