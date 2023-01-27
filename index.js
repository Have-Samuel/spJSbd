// if (1 !== 1) {
//   console.log("It's true!")
// }

// // Exe->2
// let ratiing = 2;
// if (ratiing === 2) {
//   console.log('You are a super')
// }

// // Exe3
// let num = 35;

// if (num % 2 !== 0) {
//   console.log('ODD NUMBER!')
// }

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

let rating = 2;
if (rating === 3) {
  console.log('You are a superstar!');
} else if (rating === 2) {
  console.log('meets expectations!');
} else if (rating === 1) {
  console.log('needs improvement!');
} else {
  console.log('Invalid Rating!')
}

// Exe2 

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats. you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Cood Game, Your score of ${userScore} did not beat the score of ${highScore}`);
}

// Exe3
let password = 'samie';

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log('Valid password!')
//   } else {
//     console.log('The password is long enough, can\'t contain spaces!');
//   }
// } else {
//   console.log('The password must be longer!');
// }

// let pasword = 'houseton'

// if (pasword.length >= 8 && pasword.indexOf(' ') === -1) {
//   console.log('Valid Pasword');
// } else {
//   console.log('Invalid Pasword');
// }

// 1-10

let num = 3;

if (num >= 1 && num <= 10) {
  console.log('Number is btn 1 and 10');
} else {
  console.log('Please enter a number in between 1 and 10')
}