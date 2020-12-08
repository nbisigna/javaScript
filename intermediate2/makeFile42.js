var https = require('https');
var fs = require('fs');
var request = function (id) {
  https.get(
    'https://www.gutenberg.org/cache/epub/' + id + '/pg' + id + '.txt',
    function (res) {
      var data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        fs.writeFileSync('./42_file.txt', data, { flag: 'a' });
        var stats = fs.statSync('./41_file.txt');
        console.log(id, stats.size);
        if (stats.size < 2 * 1024 * 1024 * 1024) {
          request(++id);
        }
      });
    }
  );
};
request(1);
