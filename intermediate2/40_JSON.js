const fs = require('fs');
var users = [
  {
    id: 1,
    name: 'Nick',
    greeting: function () {
      return 'Hi';
    },
    friends: [{ id: 2, name: 'Chris' }],
  },
  {
    id: 2,
    name: 'Chris',
    greeting: function () {
      return 'Hi';
    },
    friends: [{ id: 1, name: 'Nick' }],
  },
];

var json = JSON.stringify(users);
console.log(json);
fs.writeFileSync('./40_file.json', json);

var data = fs.readFileSync('./40_file.json');

console.log(JSON.parse(data));
