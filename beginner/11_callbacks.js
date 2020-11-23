function main(cb) {
  cb();
}

function callback() {
  console.log('Callback function');
}

main(callback);
