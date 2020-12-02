function fast() {
  console.log('Running the fast function.');
}

function slow(cb) {
  setTimeout(function () {
    console.log('Running the slow function.');
    cb('Error running', 'Success');
  }, 1000);
}

slow(function (err, res) {
  if (err) console.error(err);
  else console.log(res);
  fast();
});
