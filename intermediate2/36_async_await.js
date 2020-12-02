function fast() {
  console.log('Running fast function.');
}
function slow(cb) {
  setTimeout(function () {
    console.log('Running the slow function.');
    cb(null, 'Success');
  }, 1000);
}
var promise = new Promise((resolve, reject) => {
  slow((err, res) => {
    if (err) reject(err);
    else resolve(res);
  });
});

async function main() {
  try {
    var res = await promise;
    console.log(res);
  } catch (err) {
    console.error(err);
  }
  fast();
}
main();
