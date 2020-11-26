'use strict';
var global = 10;

function scope() {
  // local = 20;
  var local = 20;
  function innerFunction() {
    local = 30;
  }
  innerFunction();
  console.log(local);
}

scope();
// console.log(local)
console.log(global);
