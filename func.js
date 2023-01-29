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

function square(x) {
  return x * x;
  console.log() // this never works after return
}

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

function containPink(arr) {
  for (let color of arr) {
    if (color === 'pink' || color === 'magenta') {
      return true;
    }
  }
  return false;
}
arr = ['red', 'magenta', 'pink']