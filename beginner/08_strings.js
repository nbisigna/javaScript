var string = "How's is going?";

string = 'Hello';

console.log(string + ' World');

var num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);

string = 65;
string = String.fromCharCode(string);
console.log(string);

num = 'a';
num = num.charCodeAt();
console.log(num);

string = 'Hello World';
string = string.split('');
string[0] = 'Y';
string = string.join('');
console.log(string);

var slice = string.slice(6);
console.log(slice);
