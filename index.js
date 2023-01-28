// // earliest methods to add elements to the array
// let shopping = ['hut', 'books', 'mask', 'handkerchief'];

// shopping[2] = 'knife'

// shopping[shopping.length]  = 'dounat'
// // push() and pop()
// let games = ['football', 'rugby', 'netball', 'handball', 'cricket', 'basketball'];
// games.push('badminton');

// games.pop();

// const rejectedGame = games.pop();
// // unshift and shift
// let animals = ['cow', 'goat', 'pig', 'hen', 'cat']
// animals.unshift('elephant')

// animals.shift()

// let nums = [12, 23, 13, 34]
// let floats = [19, 39, 29, 81, 98];
// let int = [90, 97, 91, 94, 50]
// // concat()
// const allTogether = nums.concat(floats, int)

// console.log(allTogether);

// let fruits = ['paw paw', 'pinapple', 'guava', 'jack-fruit', 'orange']
// const allFruits = fruits.includes('orange')
// console.log(allFruits)
// // includes
// if (fruits.includes('paw paw')) {
//   console.log('I cant have that for lunch!')
// }
// // indexOf
// const selectedFruit = fruits.indexOf('guava')
// console.log(selectedFruit);

// // revered()
// let alphas = ['K', 'A', 'B', 'A', 'R', 'E', 'E', 'B', 'E']
// const reversedData = alphas.reverse()
// console.log(reversedData)

// // join()
// const joinedData = alphas.reverse().join()
// console.log(joinedData)

// //slice
// let animalKingdom = ['shark', 'whale', 'dolphine', 'bear', 'tortoise', 'lizard']
// let swimmers = animalKingdom.slice(0, 3)
// console.log(swimmers)
// let aniGround = animalKingdom.slice(3)
// console.log(aniGround)
// let midAni = animalKingdom.slice(2, 5)
// console.log(midAni)
// console.log(animalKingdom)

// //splice
// let wild = ['cow', 'goat', 'pig', 'hen', 'cat', 'lion', 'snake'];
// const newOne = wild.splice(1, 0, 'pig')
// console.log(newOne)
// const secondOne = wild.splice(2, 2)
// console.log(secondOne)
// const thirdOne = wild.splice(3, 0, 'BOOKS')
// console.log(thirdOne)

// // sort()
// let names = ['yamu', 'nuru', 'mula', 'gula', 'zaka', 'angel', 'boboka']
// const sortedData = names.sort()
// console.log(sortedData)

// // nested arrays
// const maleFamale = [
//   ['doe', 'back'],
//   ['ewe', 'ram'],
//   ['peahen', 'peacock']
// ]

// const select = maleFamale[1][1] = 'stag';
// console.log(maleFamale)

// // Arrays Exercise
// const people = ['Greg', 'Mary', 'Devon', 'James'];
// // removes elements from the front of the array
// const remover = people.shift();
// console.log(remover);
// console.log(people);

// // removes elements from the end
// const secondRemover = people.pop()
// console.log(secondRemover);
// console.log(people);

// // adds elements at the front of the array
// const addData = people.unshift('Matt');
// console.log(people);

// // Adding element to end of the array
// people.push('Have');
// console.log(people);

// // copying the array, with excludes => slice
// const oneOfTheOther = people.slice(1)
// console.log(oneOfTheOther)

// // shows index of
// const index = people.indexOf('Mary')
// console.log(index)
// const index2 = people.indexOf('Foo');
// console.log(index2);

// // Using splice
// const people2 = ['Greg', 'Mary', 'Devon', 'James'];
// const getOn = people2.splice(2, 1, 'Elizabeth', 'Artie')
// console.log(people2)


// const withBob = people2.concat('Bob');
// console.log(withBob)

// OBJECTS
const fitBitdData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workOutsThisWeek: '5 of 7',
  avgGoodSleep: '3:13'
}

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
}

const find = numbers[100]
console.log(find);

const palette = {
  red: '#eb4dd4d',
  yellow: '#f9ca24',
  blue: '#30336b'
};

const palette2 = palette;
palette2.brown = '#2b4409'

let mysteryColor = 'blue';
// Adding elements into an Object
const reviews = {};

reviews['queenBee34'] = 45;
reviews['mrSmith45'] = 3.03;
reviews.gyal71 = 90.23;

// Nesting arrays into objects

const student = {
  firstName: 'Have',
  secondName: 'Peace',
  strength: ['football', 'Atheletics'],
  exams: {
    midterm: 86,
    final: 70
  }
};
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);

const index = student.strength[0]
console.log(index);

const shoppingCart = [
  {
    product: 'jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.88,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  },
];

const game = {
  player1: {
    userName: 'Blue',
    playingAs: 'X'
  },
  player2: {
    userName: 'Muffins',
    playingAs: 'o'
  },
  board: [
    ['o', null, 'X'],
    ['X', 'o', null],
    [null, 'o', 'X']
  ]
};

let nums = [1, 2, 3];
let moreNums = [1, 2, 3]
let otherNums = nums;