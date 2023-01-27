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

// let num = 3;

// if (num >= 1 && num <= 10) {
//   console.log('Number is btn 1 and 10');
// } else {
//   console.log('Please enter a number in between 1 and 10')
// }

// let age = 50;
// if (age < 10 || age >= 65) {
//   console.log('You are free to enter!');
// } else {
//   console.log('You Must PAYYY!');
// }

// let flavour = 'watermelon';

// if (flavour !== 'cherry' && flavour !== 'grape') {
//   console.log('We don\'t have that Flavour avialable!');
// }

let day = 9;

// if (day === 1) {
//   console.log('Monday!')
// } else if (day === 2) {
//   console.log('Tuesady!');
// } else if (day === 3) {
//   console.log('Wednesday!')
// } else if (day === 4) {
//   console.log('Thursday!')
// } else if (day === 5) {
//   console.log('Friday')
// } else if (day === 6) {
//   console.log('Saturday!')
// } else if (day === 7) {
//   console.log('Sunday!')
// } else {
//   console.log('Invalid Day!')
// }

// switch (day) {
//   case 1:
//     console.log('MONDAY!')
//     break;
//   case 2:
//     console.log('TUESDAY!')
//     break;
//   case 3:
//     console.log('WEDNESDAY!')
//     break;
//   case 4:
//     console.log('THURSDAY!')
//     break;
//   case 5:
//     console.log('FRIDAY!')
//     break;
//   case 6:
//     console.log('SATURDAY!')
//     break;
//   case 7:
//     console.log('SUNDAY!')
//     break;
//   default:
//     console.log('INVALID DAY!');
// }

// let emoji = 'happy face';

// switch (emoji) {
//   case 'happy face':
//   case 'sad face':
//     console.log('YELLOW!')
//     break;
//   case 'lips':
//   case 'heart':
//     console.log('RED!')
//     break;
//   case 'Afraid':
//     console.log('PURPLE!')
//     break;
//   default:
// }

let num = 8;
// if (num === 8) {
//   console.log('LUCKY!')
// } else {
//   console.log('BAD!')
// }

num === 8 ? console.log('LUCKY!') : console.log('BAD!');