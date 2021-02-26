'use strict';

let random_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// console.log(random_number);

function display_message(message_view) {
  document.querySelector('.message').textContent = message_view;
}

function score_dec() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    display_message('You lost the game');
  }
}

function check() {
  document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      display_message('No Number');
    } else if (guess > random_number) {
      display_message('To High');
      score_dec();
    } else if (guess < random_number) {
      display_message('To Low');
      score_dec();
    } else if (guess === random_number) {
      let scr_number = (document.querySelector(
        '.number'
      ).textContent = random_number);
      display_message('Correct Number');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  });
}
check();

function again() {
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    display_message('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
}
again();
