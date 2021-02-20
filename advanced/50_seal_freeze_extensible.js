var obj = { name: 'Nick' };

// Object.preventExtensions(obj);
// Object.seal(obj);
Object.freeze(obj);

obj.age = 30;
Object.defineProperty(obj, 'name', { writable: false });
obj.name = 'Chris';

console.log(Object.isExtensible(obj));
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));

console.log(obj);
