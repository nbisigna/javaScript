var num = 1;
console.log(num);

num = num + 1;
console.log(num);

console.log((num += 2));
console.log((num -= 2));
console.log((num *= 2));
console.log((num /= 2));
console.log((num **= 2));
console.log((num %= 2));

console.log(++num);
console.log(num--);
console.log(num);

num = parseInt(num);
num = Number(num);
console.log(typeof num);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Infinity);
console.log(-Infinity);
