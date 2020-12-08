var fs = require('fs');

// var data = fs.readFileSync('./42_file.txt');
// console.log(data);

var stream = fs.createReadStream('./42_file.txt');
var wStream = fs.createWriteStream('./42_file2.txt');
stream.on('open', function () {
  console.log('Stream Opened.');
});

stream.on('data', function (data) {
  //   wStream.write(data);
  console.log(data.toString());
});

stream.on('error', function (err) {
  console.error(err);
});

stream.on('close', function () {
  console.log('Stream Closed.');
});
