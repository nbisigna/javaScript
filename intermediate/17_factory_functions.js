var Nick = { name: 'Nick', age: 30, single: true };
var Chris = { name: 'Chris', age: 23, single: false };

function greet(person) {
  return (
    'Hello my name is ' +
    person.name +
    '. I am ' +
    person.age +
    ' years old and I am ' +
    (person.single ? '' : 'not') +
    ' single.'
  );
}

console.log(greet(Nick));
console.log(greet(Chris));

var Person = function (name, age, single) {
  var person = {};
  person.name = name;
  person.age = age;
  person.single = single;
  person.greet = function () {
    return (
      'Hello my name is ' +
      person.name +
      '. I am ' +
      person.age +
      ' years old and I am ' +
      (person.single ? '' : 'not') +
      ' single.'
    );
  };
  return person;
};
var nick = Person('Nick', 30, true);
console.log(nick.greet());
var chris = Person('Chris', 23, false);
console.log(chris.greet());

var Cop = function (name, age, single, precinct, badgeNumber, onDuty) {
  var cop = Object.create(Person(name, age, single));
  cop.precinct = precinct;
  cop.badgeNumber = badgeNumber;
  cop.onDuty = onDuty;
  cop.greeting = cop.greet();
  cop.greet = function () {
    return cop.greeting + ' I am a cop.';
  };
  return cop;
};

var Bill = Cop('Bill', 45, false, '1st', 123456, true);
console.log(Bill);
console.log(Bill.__proto__);
console.log(Bill.greet());
