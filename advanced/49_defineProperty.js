'use strict';
var apple = {};

// Object.defineProperty(apple, 'color', {
// //   value: 'red',
// //   enumerable: true,
//   // writable: true,
// //   configurable: true,
//   get(){
//       return this.value || 'red';
//   },
//   set(v){
//       this.value = v;
//   }
// });
apple.color = 'green';
// Object.defineProperty(apple, 'color', { value: 'green'});
// Object.defineProperty(apple, 'color', { writable: true });

console.log(Object.getOwnPropertyDescriptor(apple, 'color'));

for (var i in apple) console.log(apple[i]);

console.log('color' in apple);
console.log(apple.hasOwnProperty('color'));
console.log(Object.getOwnPropertyNames(apple));
console.log(Object.getOwnPropertySymbols(apple));
