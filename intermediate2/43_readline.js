var fs = require('fs');
var readline = require('readline');
// var stream = fs.createReadStream('./43_ED.csv');

// stream.on('data', function (data) {
//   data = data.toString().split(/,|\n/);
//   console.log(...data.slice(0, 7));
//   for (var i = 7; i < data.length; i++) {
//     var arr = [data[i]];
//     for (var j = 1; j < 7; j++) {
//       arr.push(Number(data[i + j]).toFixed(0));
//     }
//     console.log(...arr);
//     i += 6;
//   }
//   // process.exit(0);
// });
var readlineInterface = readline.createInterface({
  input: fs.createReadStream('./43_ED.csv'),
  output: false,
  console: false,
});
// var Reset = '\x1b[0m';
// var Bright = '\x1b[1m';
// var Dim = '\x1b[2m';
// var Underscore = '\x1b[4m';
// var Blink = '\x1b[5m';
// var Reverse = '\x1b[7m';
// var Hidden = '\x1b[8m';

var Black = '\x1b[30m';
var Red = '\x1b[31m';
var Green = '\x1b[32m';
var Yellow = '\x1b[33m';
var Blue = '\x1b[34m';
var Magenta = '\x1b[35m';
var Cyan = '\x1b[36m';
var White = '\x1b[37m';

var BgBlack = '\x1b[40m';
var BgRed = '\x1b[41m'; //low
var BgGreen = '\x1b[42m'; //high
var BgYellow = '\x1b[43m';
var BgBlue = '\x1b[44m'; //open
var BgMagenta = '\x1b[45m'; //volume
var BgCyan = '\x1b[46m'; //close
var BgWhite = '\x1b[47m'; //a close

readlineInterface.on('line', function (line) {
  line = line.split(',');
  console.log(
    White,
    line[0],
    Blue,
    Number(line[1]).toFixed(0),
    Green,
    Number(line[2]).toFixed(0),
    Red,
    Number(line[3]).toFixed(0),
    Cyan,
    Number(line[4]).toFixed(0),
    Yellow,
    Number(line[5]).toFixed(0),
    Magenta,
    Number(line[6]).toFixed(0)
  );
  // process.exit(0);
});
readlineInterface.on('SIGINT', function () {
  console.error('Signal Interrupted.');
});
readlineInterface.on('close', function () {
  console.log('Interface closed.');
});
