var methods = {
  intro: function () {
    return 'Hi my name is ' + person.name;
  },
};
function Person(name, age, single) {
  var person = Object.create(methods);
  person.name = name;
  person.age = age;
  person.single = single;
  return person;
}
var nick = Person('Nick', 30, true);
var chris = Person('Chris', 23, false);
console.log(nick.intro === chris.intro);
