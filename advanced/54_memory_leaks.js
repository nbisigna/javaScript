// var arr = [];
// var obj = {};
// var str = '';
// for (var i = 0; i < 1024 * 1024 * 128; i++) {
//   arr.push(1);
//   obj[i] = 1;
//   str += ' ';
// }
var value = null;
function closure() {
  var last = value;
  (function () {
    last;
  })(last);
  value = {
    a: function () {},
  };
}
setInterval(function () {
  closure();
  console.log(process.memoryUsage());
}, 1);
