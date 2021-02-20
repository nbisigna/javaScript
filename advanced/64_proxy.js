var obj = {};
var proxy = new Proxy(obj, {});
obj.key = 'value';
console.log(proxy.key);
proxy.prop = 'some value';
console.log(obj.prop === proxy.prop);
console.log(obj === proxy);

var apple = {
  _color: 'green',
  get color() {
    return this._color;
  },
};

var appleProxy = new Proxy(apple, {
  get(target, prop, receiver) {
    if (!target[prop]) return 'red';
    // else return target[prop];
    return Reflect.get(target, prop, receiver);
  },
});

console.log(appleProxy.color);

var orange = {
  __proto__: appleProxy,
  _color: 'orange',
};
console.log(orange.color);

var { proxy, revoke } = Proxy.revocable(orange, {
  get(target, prop, receiver) {
    if (prop === 'color') return 'blue';
    else return Reflect.get(...arguments);
  },
});

console.log(proxy.color);
revoke();
// console.log(proxy.color);

var map = new Map();

var p = new Proxy(map, {
  get(target) {
    var value = Reflect.get(...arguments);
    return typeof value === 'function' ? value.bind(target) : value;
  },
});

p.set('Hello', 'World');
console.log(p.get('Hello'));

function extend(sup, base) {
  var handler = {
    construct: function (target, args) {
      return Reflect.construct(sup, args, base);
    },
  };
  Reflect.setPrototypeOf(base.prototype, sup.prototype);
  return new Proxy(base, handler);
}

function Pet(name) {
  this.name = name;
}

var Dog = extend(Pet, function (name) {});

var sparky = new Dog('Sparky');

console.log(sparky.name);
