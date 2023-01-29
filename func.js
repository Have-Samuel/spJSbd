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