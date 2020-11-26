var obj = { key: 'value' };

var nick = { name: 'Nick' };
console.log(nick.name);
console.log(nick['name']);

nick.age = 30;
nick['single'] = true;

console.log(nick);

// var name = nick.name;
var { name } = nick;
console.log(name);

var values = Object.values(nick);
console.log(values);
var keys = Object.keys(nick);
console.log(keys);
var entries = Object.entries(nick);
console.log(entries);

for (var key in nick) console.log(key, nick[key]);
for (var [k, v] of Object.entries(nick)) console.log(k, v);

var arr = [1, true, 'string'];
var [x, boolean, str] = arr;
console.log(x);
console.log(boolean);
console.log(str);

var arrObj = [];
arrObj.nick = 'Nick';
console.log(arrObj.nick);
