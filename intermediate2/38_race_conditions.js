function slow(id, cb) {
  setTimeout(function () {
    cb(Math.round(Math.random()), id);
  }, Math.random() * 3000);
}
var promises = [];
for (var i = 0; i < 3; i++) {
  var prom = new Promise((resolve, reject) => {
    slow(i, function (err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  });
  promises.push(prom);
}
// Promise.all(promises)
// Promise.allSettled(promises)
Promise.race(promises)
  .then((res) => {
    console.log('Success:', res);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
