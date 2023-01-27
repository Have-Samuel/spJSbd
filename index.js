// let shopping = ['hut', 'books', 'mask', 'handkerchief'];

// shopping[2] = 'knife'

// shopping[shopping.length]  = 'dounat'

// let games = ['football', 'rugby', 'netball', 'handball', 'cricket', 'basketball'];
// games.push('badminton');

// games.pop();

// const rejectedGame = games.pop();

// let animals = ['cow', 'goat', 'pig', 'hen', 'cat']
// animals.unshift('elephant')

// animals.shift()

let nums = [12, 23, 13, 34]
let floats = [19, 39, 29, 81, 98];
let int = [90, 97, 91, 94, 50]

const allTogether = nums.concat(floats, int)

console.log(allTogether);

let fruits = ['paw paw', 'pinapple', 'guava', 'jack-fruit', 'orange']
const allFruits = fruits.includes('orange')
console.log(allFruits)

if (fruits.includes('paw paw')) {
  console.log('I cant have that for lunch!')
}