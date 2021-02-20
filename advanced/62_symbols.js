var sym = Symbol('Nick');
var sym2 = Symbol('Nick');
console.log(sym === sym2);

var sym3 = Symbol.for(30);
var sym4 = Symbol.for(30);
console.log(sym3 === sym4);
console.log(Symbol.keyFor(sym4));

var obj = {};
obj[sym] = 'name';
obj['name'] = sym2;
for (var i in obj) console.log(i);
console.log(Object.getOwnPropertySymbols(obj));
console.log(typeof sym);
console.log(typeof sym.toString());
console.log(JSON.stringify(obj));

var arr = [1, 2, 3, 4, 5, 6];
var iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());

class Collection extends Array {
  constructor() {
    super();
    this[Symbol.isConcatSpreadable] = false;
    this[Symbol.toStringTag] = 'Collection';
  }
  *[Symbol.iterator]() {
    for (var i in this) yield this[i];
  }
  //   static [Symbol.hasInstance](inst) {
  //     return Array.isArray(inst);
  //   }
  static get [Symbol.species]() {
    return Array;
  }
  [Symbol.toPrimitive](type) {
    console.log(type);
    switch (type) {
      case 'number':
        return col.reduce((a, b) => a + b);
      case 'string':
        return col.join('');
      case 'default':
        return col.length;
    }
  }
  //   [Symbol.split](string) {
  //   [Symbol.search](string) {
  //   [Symbol.replace](string) {
  //   [Symbol.matchAll](string) {
  [Symbol.match](string) {
    return col.join('').indexOf(string);
  }
}

var col = new Collection();
col.push(1);
col[1] = 2;

for (var i of col) console.log(i);

// console.log([0].concat(col));

console.log([] instanceof Collection);

var mapped = col.map((v) => 2 * v);
console.log(mapped instanceof Collection);

console.log(toString.call(col));

console.log(+col);
console.log(`${col}`);
console.log('' + col);

Object.defineProperty(Collection.prototype, Symbol.unscopables, {
  value: { length: true },
});

// with(col){
//     console.log(length);
// }
console.log('2'.match(col));
