// earliest methods to add elements to the array
let shopping = ['hut', 'books', 'mask', 'handkerchief'];

shopping[2] = 'knife'

shopping[shopping.length]  = 'dounat'
// push() and pop()
let games = ['football', 'rugby', 'netball', 'handball', 'cricket', 'basketball'];
games.push('badminton');

games.pop();

const rejectedGame = games.pop();
// unshift and shift
let animals = ['cow', 'goat', 'pig', 'hen', 'cat']
animals.unshift('elephant')

animals.shift()

let nums = [12, 23, 13, 34]
let floats = [19, 39, 29, 81, 98];
let int = [90, 97, 91, 94, 50]
// concat()
const allTogether = nums.concat(floats, int)

console.log(allTogether);

let fruits = ['paw paw', 'pinapple', 'guava', 'jack-fruit', 'orange']
const allFruits = fruits.includes('orange')
console.log(allFruits)
// includes
if (fruits.includes('paw paw')) {
  console.log('I cant have that for lunch!')
}
// indexOf
const selectedFruit = fruits.indexOf('guava')
console.log(selectedFruit);

// revered()
let alphas = ['K', 'A', 'B', 'A', 'R', 'E', 'E', 'B', 'E']
const reversedData = alphas.reverse()
console.log(reversedData)

// join()
const joinedData = alphas.reverse().join()
console.log(joinedData)