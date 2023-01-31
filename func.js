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
//   return num1 - num2;
// }
// subtract();

// // EXE=> 2
// function multiply(x, y) {
//   return x * y;
// }
// multiply();

// EXE=> 3
function printDay(num) {
  const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }
  return days[num];
}

// EXE=> 4
let arr = [1,2,3,4,5];
function lastElement(arr) {
  return arr[arr.length - 1]
}

// EXE=> 5
function compareNumber(a, b) {
  if (a > b) {
    return 'First Number is greater!';
  } else if (b > a) {
    return 'Second Number is greater!'
  } else {
    return 'Numbers are Equal!'
  }
}

// EXE=> 6
function singleLetterCount(word, letter) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      counter++;
    }
  }
  return counter;
}

// EXE=> 7
function multipleLetterCount(str) {
  // str.toUpperCase();
  let finalObj = {};
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]] === undefined) {
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}
// EXE=> 8
function arrayManipulation(arr, command, position, val) {
  if (command === 'remove') {
    if (position === 'end') {
      return arr.shift();
    }
    return arr.pop();
  }
  else if (command === 'add') {
    if (position === 'end') {
      arr.push(val);
      return arr;
    }
    arr.unshift(val);
    return arr;
  }
}

// EXE=> 9
// Method 1
function isPalindrome(drome) {
  return (
    drome.toLowerCase().split('').reverse().join('') === drome.toLowerCase()
  );
  // Method 2
  for (i = 0; i < drome.length / 2; i++) {
    if (drome[i].toLowerCase() !== drome[drome.length-1-I].toLowerCase()) {
      return false;
    }
  }
  return true;
} 
