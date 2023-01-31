// FunctionRollDice
// function rollDice() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// function throwDice(numRolls) {
//   for (i = 0; i < numRolls; i++) {
//     rollDice();
//   }
// }
// throwDice(6)

// function greet() {
//   console.log('Hi')
// }

// function greet(nickname) {
//   console.log(`Hey ${nickname}`);
// }

// function square(a, b) {
//   console.log(a * b);
// }

// function divide(x, y) {
//   console.log(x / y);
// }

// function sum(num1, num2) {
//   console.log(num1 + num2)
// }

// function subtract(u, m) {
//   return u - m;
// }

// function square(x) {
//   return x * x;
//   console.log() // this never works after return
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   } else {
//     return false;
//   }
// }

// SHORTER WAY!
// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   } 
//     return false;
// }
  
// MORE SHORTER WAY!
// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }

// function containPink(arr) {
//   for (let color of arr) {
//     if (color === 'pink' || color === 'magenta') {
//       return true;
//     }
//   }
//   return false;
// }
// arr = ['red', 'magenta', 'pink']

// **EXERCISE 1** //
// => Method 1
// function isValidPassword(password, username) {
//   if (password < 8) {
//     return false;
//   }
//   if (password.indexOf(' ') !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// **EXERCISE 1** //
// => Method 2
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(' ') !== -1 ||
//     password.indexOf(username) !== -1) {
//     return false;
//     }
//   return true;
// }

// // **EXERCISE 1** //
// // => Method 3
// function isValidPassword(password, username) {
//   const toShort = password.length < 8;
//   const hasSpaces = password.indexOf(' ') !== -1;
//   const soSimilar = password.indexOf(username) !== -1;
//   // if (toShort || hasSpaces || soSimilar) return false;
//   // return true;
//   // if (!toShort && !hasSpaces && !soSimilar) return true;
//   // return false;
//   return !toShort && !hasSpaces && !soSimilar;
// }

// // **EXERCISE 2**
// // => Method 1
// function average(arr) {
//   let sum = 0;
// // loop over each(parameter)
//   for (let num of arr) {
//     //add them together
//     sum += num;
//   }
//   //divide by number of nums
//   return sum / arr.length;
// }

// **EXERCISE 3**
// // => Method 1
// function isPangram(wording) {
//   let lowerCased = wording.toLowerCase();
//   for (let alpha of 'abcdefghijklmnopqrstuvwxyz') {
//     // if (lowerCased.indexOf(alpha) === -1) {
//     if (!lowerCased.includes(alpha)) {
//       return false;
//     }
//   }
//   return true;
// }

// **EXERCISE 4**
// // => Method 1
// function getCard() {
//   const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
//   const suits = ['Spade', 'Arces', 'Clubs', 'Diamonds'];

//   const valIdx = Math.floor(Math.random() * values.length);
//   const value = values[valIdx];

//   const suitIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIdx];
//   return { value: value, suit: suit };
// }

// // => Method 2
// function pick(arr) {
//   // return random element from arr
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }


// function getCard() {
//   const values = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
//   ];
//   // const value = pick(values);
//   const suits = ['Spade', 'Arces', 'Clubs', 'Diamonds'];
//   // const suit = pick(suits);
//   return { value: pick(values), suit: pick(suits) };// better option
// }

// EXE=> 1
// function subtract(num1, num2) {
//   console.log(num1 - num2);
// }
// subtract();

// // EXE=> 2
// function multiply(x, y) {
//   console.log(x * y);
// }
// multiply();

// EXE=> 3
function printDay(week) {
  const days = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7
  }

  const weekSDays = Math.floor(Math.random() * days.length);
  console.log(weekSDays[days])
  for (let i = 0; i <= days.length; i++) {
   
  }
}