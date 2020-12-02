var promisify = require('util').promisify;

function slow(cb) {
  setTimeout(function () {
    console.log('Running slow function.');
    cb(null, 'Success');
  }, 1000);
}

var promise = promisify(slow);

promise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  try {
    var res = await promise();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
  console.log('Function finished');
}
main();
