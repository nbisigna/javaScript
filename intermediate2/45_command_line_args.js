// console.log(process.argv);
let args = process.argv.slice(2);
// console.log(args);
var height = Number(args[0]) || 5;
var width = height * 2 + 1;
var half = Math.floor(width / 2);
var stump = [];

var Bright = '\x1b[1m';
var Dim = '\x1b[2m';
var Blink = '\x1b[5m';
var Nothing = '';
var Red = '\x1b[31m';
var Green = '\x1b[32m';
var Yellow = '\x1b[33m';
var Blue = '\x1b[34m';
var Magenta = '\x1b[35m';
var Cyan = '\x1b[36m';
var White = '\x1b[37m';
var Crimson = '\x1b[38m';
var Normal = '\x1b[0m';
var color = [Red, Green, Yellow, Blue, Magenta, Cyan, White, Crimson, Nothing];
var effect = [Bright, Dim, Blink, Nothing];
for (var i = 0; i < height; i++) {
  var str = [];
  for (var j = 0; j < half - i; j++) {
    str.push(' ');
  }
  for (var j = 0; j < i * 2 + 1; j++) {
    var c = color[Math.floor(Math.random() * 9)];
    var e = effect[Math.floor(Math.random() * 4)];
    if (i == 0) {
      str.push(Bright);
      str.push(Yellow);
    } else {
      str.push(c);
      str.push(e);
    }
    str.push('*');
    str.push(Normal);
  }
  for (var j = 0; j < half - i; j++) {
    str.push(' ');
  }
  if (i == Math.floor(height / 3)) stump.push(str.join(''));
  console.log(str.join(''));
}
console.log(
  stump[0]
    .split('')
    .filter((a) => a == ' ' || a == '*')
    .map((a) => {
      if (a == '*') {
        return Dim + Red + '|';
      } else {
        return ' ';
      }
    })
    .join('')
);
