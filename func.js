// FunctionRollDice
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (i = 0; i < numRolls; i++) {
    rollDice();
  }
}
throwDice(6)

// function greet() {
//   console.log('Hi')
// }

function greet(nickname) {
  console.log(`Hey ${nickname}`);
}

function square(a, b) {
  console.log(a * b);
}

function divide(x, y) {
  console.log(x / y);
}

function sum(num1, num2) {
  console.log(num1 + num2)
}

function subtract(u, m) {
  return u - m;
}