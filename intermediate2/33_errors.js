var error = new Error('You made an error.');
try {
  //   throw error;
  //   divide('1', 2);
  divide(10, 0);
} catch (err) {
  if (err instanceof TypeError) {
    console.error(err.name, ':', err.message);
  } else if (err instanceof RangeError) {
    console.error(err.name, ':', err.message);
  } else {
    console.error(err.name, ':', err.message);
  }
}
function divide(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    throw new TypeError('Arguments of divide function must be numbers.');
  }
  if (y == 0) throw RangeError('Denominator must be non-zero number.');
  return x / y;
}
