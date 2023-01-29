// FunctionRollDice
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function throwDice() {
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}