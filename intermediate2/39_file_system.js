var fs = require('fs');
var path = './39_file.txt';
// fs.writeFile(path, 'Hello', function (err) {
//   if (err) console.error(err);
//   fs.appendFile(path, ' World', function (err) {
//     if (err) console.error(err);
//     fs.readFile(path, function (err, data) {
//       if (err) console.error(err);
//       else console.log(data.toString());
//       fs.unlink(path, function (err) {
//         if (err) console.error(err);
//       });
//     });
//   });
// });
try {
  fs.writeFileSync(path, 'Hello', { flag: 'w' });
  fs.appendFileSync(path, ' World');
  var data = fs.readFileSync(path, 'utf-8');
  console.log(data);
  var stats = fs.statSync(path);
  console.log(stats);
  fs.unlinkSync(path);
  var exists = fs.existsSync(path);
  console.log(exists);
} catch (err) {
  console.error(err);
}
