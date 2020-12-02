var date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toUTCString());

console.log(date.toLocaleString('en-US'));

var now = new Date();
console.log(now);
console.log(now.getTime());
// January 01, 1970 00:00:00 UTC
now.setTime(now.getTime() - 3600000);
console.log(now);

console.log(new Date(now.getTime()));
console.log(new Date('SEP 6 1990 11:59:00'));
console.log(new Date(2020, 11, 24, 10, 15, 30, 0));

var t1 = Date.now();
for (var i = 0; i < 10000000; i++) {}
var t2 = new Date().getTime();
console.log(t2 - t1);
