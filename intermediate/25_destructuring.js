var post = {
  user: 'Nick',
  title: 'Hello world',
  body: 'Hello everybody how are you doing?',
};

// var user = post.user;
// var title = post.title;
// var body = post.body;
var { user, title, body } = post;

console.log(user);
console.log(title);
console.log(body);

var newObj = {
  user,
  title,
  body,
};
console.log(newObj);

var myFunc = ({ user, title, body }) => user + '. ' + title + '. ' + body;

console.log(myFunc(post));

var arr = [1, false, 'Nick'];
var [, , name] = arr;
// console.log(one);
// console.log(bool);
console.log(name);

console.log(Object.entries(post));
for (var [k, v] of Object.entries(post)) console.log(k, v);
