var obj = { name: 'Nick' };
var obj2 = { age: 30 };
// var obj3 = Object.assign({}, obj, obj2);
Object.defineProperty(obj, 'single', { value: true, enumerable: true });
console.log('single' in obj);
var obj3 = { ...obj, ...obj2 };
console.log(obj3);

var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
// var arr3 = arr.concat(arr2);
var arr3 = [...arr, ...arr2];
console.log(arr3);

function add(x, y, z) {
  return x + y + z;
}
console.log(add(...[1, 2, 3]));

var str = 'Hello';
console.log([...str]);
