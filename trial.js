// function difference(x, y) {
//   return x - y;
// }
// difference();

// function product(x, y) {
//   return x * y;
// }
// product();

// function printDay(num) {
//   const stream = {
//     1: 'sunday',
//     2: 'monday',
//     3: 'tuesday',
//     4: 'wedensday',
//     5: 'thrusday',
//     6: 'friday',
//     7: 'saturday'
//   }
//   return stream[num];
// }

// function lastElement(arr) {
//   return arr[arr.length - 1];
// }

// function numberCompare(num1, num2) {
//   if (num1 === num2) {
//     return 'Numbers are equal!'
//   } else if (num1 > num2) {
//     return 'First is greater!'
//   } else {
//     return 'Second is greater!'
//   }
// }

// function singleLetterCount(steam, letter) {
//   let something = 0;
//   for (let i = 0; i < steam.length; i++) {
//     if (steam[i].toLowerCase() === letter.toLowerCase()) {
//       something++;
//     }
//   }
//   return something;
// }

// function multipleLetterCount(str) {
//   let finalObj = {};
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (finalObj[str[i]] === undefined) {
//       finalObj[str[i]] = 1;
//     } else {
//       finalObj[str[i]]++;
//     }
//   }
//   return finalObj;
// }

// function arrayManipulation(arr, command, position, val) {
//   if (command === 'remove') {
//     if (position === 'end') {
//       return arr.pop();
//     }
//     return arr.shift();
//   } else if (command === 'add') {
//     if (position === 'end') {
//       arr.unshift(val);
//       return arr;
//     }
//     arr.push(val);
//     return arr;
//   }
// }

// function isPalindrome(str) {
//   return str.toLowerCase().split('').reverse().join('') === str.toLowercase();
// }

function RPS() {
  function deterComputer(num) {
    if (num <= .33) return 'rock';
    else if (num <= .66) return 'paper';
    return 'scissors';
  }

  let userChoice = prompt('Pick rock, paper, or scissors').toLowerCase();
  let computerChoice = deterComputer(Math.random());

  let answers = ('rock', 'paper', 'scissors');

  if (!userChoice || answers.indexOf(userChoice) === -1) {
    return 'Please select a valid option!';
  }

  if (userChoice === computerChoice) return 'Tie!'

  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'You lost, computer picked' + computerChoice;
  }
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'You lost, computer picked' + computerChoice; 
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'you lost, computer picked' + computerChoice;
  }
  return 'You won!, computer pick' + computerChoice;
}