var arr = [10, true, 'Hello'];
// arr[2] = 11;
// arr.push("world");
// arr.pop();
// arr.unshift(false);
// arr.shift();
// console.log(arr.slice(1));
// console.log(arr.splice(1,1));
// console.log(arr);
for (var i = 0; i < arr.length; i++) console.log(arr[i]);
for (var el in arr) console.log(arr[el]);
for (var el of arr) console.log(el);