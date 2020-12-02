function fast() {
  console.log('Running the fast function.');
}
function slow(cb) {
  setTimeout(function () {
    console.log('Running the slow function.');
    cb('Running an error.', 'Success');
  }, 1000);
}
var promise = new Promise((resolve, reject) => {
  slow(function (err, res) {
    if (err) reject(err);
    else resolve(res);
  });
});
promise
  .then((res) => {
    console.log(res);
    fast();
  })
  .catch((err) => {
    console.error(err);
  });
