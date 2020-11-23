if (false) {
  console.log("It's true It's true");
} else {
  console.log("It's false It's false");
}

var age = Math.floor(Math.random() * 100);
console.log(age);

if (age < 18) {
  console.log('Child');
} else if (age < 65) {
  console.log('Adult');
} else {
  console.log('Senior citizen');
}

age = Math.floor(Math.random() * 3);
console.log(age);

switch (age) {
  case 0:
    console.log('Zero');
    break;
  case 1:
    console.log('One');
    break;
  default:
    console.log('two');
}

age = Math.floor(Math.random() * 100);
console.log(age);

var isAdult = age >= 18 ? 'Adult' : 'Child';

console.log(isAdult);

var age;

age;

var myAge = age || 30;

console.log(myAge);
