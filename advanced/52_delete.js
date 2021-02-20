'use strict';
var obj = { name: 'Nick' };
obj.age = 30;
delete obj.name;
obj = undefined;
console.log(obj);

var arr = [1, 2, 3];
delete arr[1];
// arr = [];
arr.length = 0;
arr = null;
console.log(arr);

// var myVar = 10;
// delete myVar;
// console.log(myVar);
