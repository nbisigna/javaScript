function prompt(question, callback) {
  process.stdout.write(question);
  process.stdin.once('data', function (data) {
    callback(data.toString().trim());
  });
}
var answer = Math.floor(Math.random() * 10) + 1;
var guesses = 3;
function Game() {
  prompt(
    'You have ' + guesses + ' guesses. Guess a number from 1 to 10:\n',
    function (guess) {
      if (guess == answer) {
        guesses = 3;
        prompt('Correct! Play again? Y/n\n', reset);
      } else {
        guesses--;
        if (guesses <= 0) {
          guesses = 3;
          prompt('Wrong! Play again? Y/n\n', reset);
        } else {
          process.stdout.write('Wrong! Guess again!\n');
          Game();
        }
      }
    }
  );
}
function reset(str) {
  if (String(str)[0].toLowerCase() == 'y') {
    Game();
  } else {
    process.stdout.write('Thank you for playing!\n');
    process.exit(0);
  }
}

Game();
