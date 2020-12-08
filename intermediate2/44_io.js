var ans = Math.floor(Math.random() * 10) + 1;
var guesses = 3;
function prompt(question, callback) {
  process.stdout.write(question);
  process.stdin.once('data', function (data) {
    callback(data.toString().trim());
  });
}

var handler = (guess) => {
  try {
    guess = Number(guess);
    if (guess === ans) {
      prompt('Correct!\nPlay again? Yes or No?\n', reset);
    } else if (guess < 1 || guess > 10) {
      prompt(
        'Guess was out of range. You have ' + guesses + ' guesses left.\n',
        handler
      );
    } else if (guess < ans || guess > ans) {
      if (--guesses <= 0) {
        prompt(
          'You Lose! The answer was ' + ans + '!\nPlay again? Yes or No?\n',
          reset
        );
      } else {
        prompt('Wrong. You have ' + guesses + ' guesses left.\n', handler);
      }
    }
  } catch (err) {
    prompt('Please enter a valid number.\n', handler);
  }
};

var reset = (res) => {
  if (String(res[0]).toLowerCase() == 'y') {
    guesses = 3;
    ans = Math.floor(Math.random() * 10) + 1;
    prompt('Guess a number from one to ten. You have 3 guesses.\n', handler);
  } else {
    console.log('Thank you for playing!');
    process.exit(0);
  }
};

prompt('Guess a number from one to ten. You have 3 guesses.\n', handler);
