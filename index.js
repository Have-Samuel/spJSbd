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

// // OBJECTS
// const fitBitdData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workOutsThisWeek: '5 of 7',
//   avgGoodSleep: '3:13'
// }

// const numbers = {
//   100: 'one hundred',
//   16: 'sixteen'
// }

// const find = numbers[100]
// console.log(find);

// const palette = {
//   red: '#eb4dd4d',
//   yellow: '#f9ca24',
//   blue: '#30336b'
// };

// const palette2 = palette;
// palette2.brown = '#2b4409'

// let mysteryColor = 'blue';
// // Adding elements into an Object
// const reviews = {};

// reviews['queenBee34'] = 45;
// reviews['mrSmith45'] = 3.03;
// reviews.gyal71 = 90.23;

// // Nesting arrays into objects

// const student = {
//   firstName: 'Have',
//   secondName: 'Peace',
//   strength: ['football', 'Atheletics'],
//   exams: {
//     midterm: 86,
//     final: 70
//   }
// };
// const avg = (student.exams.midterm + student.exams.final) / 2;
// console.log(avg);

// const index = student.strength[0]
// console.log(index);

// const shoppingCart = [
//   {
//     product: 'jenga Classic',
//     price: 6.88,
//     quantity: 1
//   },
//   {
//     product: 'Echo Dot',
//     price: 29.88,
//     quantity: 3
//   },
//   {
//     product: 'Fire Stick',
//     price: 39.99,
//     quantity: 2
//   },
// ];

// const game = {
//   player1: {
//     userName: 'Blue',
//     playingAs: 'X'
//   },
//   player2: {
//     userName: 'Muffins',
//     playingAs: 'o'
//   },
//   board: [
//     ['o', null, 'X'],
//     ['X', 'o', null],
//     [null, 'o', 'X']
//   ]
// };

// let nums = [1, 2, 3];
// let moreNums = [1, 2, 3]
// let otherNums = nums

// const user = {
//   userName: 'HaveSam',
//   email: 'muelohave9@gmail.com',
//   notifications: ['message']
// }

// if (!user.notifications.length) {
//   console.log('Nothing is there!')
// }

// let programming = {
//   languages: ['Javascript', 'Python', 'Ruby'],
//   isChallengeing: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "https://bit.ly/2ysFran"
// };
// // command to add the language
// programming.languages[3] = 'Go';
// // Change the difficulty to the value of 7
// programming.difficulty = 7;
// // command to remove the jokes key from the programming object.
// delete programming.jokes;
// // command to add a new key called isFun and a value of true
// programming.isFun = true;

// LOOPS
// Loop for ODD NUMS
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i)
// }

// // Looping over Arrays
// // a World without Loops
// const cities = [
//   'San Francisco',
//   'Berlin',
//   'Tokyo',
//   'Moscow',
//   'Buenos Aires'
// ];

// console.log(cities[0]); // "San Francisco"
// console.log(cities[1]); // "Berlin"
// console.log(cities[2]); // "Tokyo"
// console.log(cities[3]); // "Moscow"
// console.log(cities[4]); // "Buenos Aires"

// // World with iterating thru an Array
// const cities1 = [
//   'San Francisco-1',
//   'Berlin-1',
//   'Tokyo-1',
//   'Moscow-1',
//   'Buenos Aires-1'
// ];

// for (let i = 0; i < cities1.length; i++) {
//   console.log(cities1[i])
// }

// // WHILE LOOP
// const cities2 = [
//   'San Francisco-2',
//   'Berlin-2',
//   'Tokyo-2',
//   'Moscow-2',
//   'Buenos Aires-2',
// ];

// let j = 0;
// while (j < cities2.length) {
//   console.log(cities2[j]);
//   j++;
// }

// // FOR OF LOOP
// //By default, for loops in JavaScript iterate through indices
// // With a for…of loop, we can iterate through the elements directly!
// const cities3 = [
//   'San Francisco-3',
//   'Berlin-3',
//   'Tokyo-3',
//   'Moscow-3',
//   'Buenos Aires-3',
// ];

// for (let city of cities3) {
//   console.log(city);
// }

// // Iterating Through An Object
// const states = {
//   name: 'San Francisco',
//   state: 'California',
//   population: 871000,
//   bridges: 2
// }
// // For...of loops don't work on objects!
// for (let key in states) {
//   console.log(key, states[key]);
// }

// // Looping Through Strings
// let str = 'pancakes';
// // does the string include a 'k'
// let includesK = false;

// for (let x = 0; x < str.length; x++) {
//   if (str[x] === 'k') {
//     includesK = true;
//   }
// }
// // Looping Backwards
// let myStr = 'live';
// let reversed = '';

// for (let i = myStr.length - 1; i >= 0; i--) {
//   reversed += myStr[i];
// }
// console.log(reversed);

// // WHILE LOOP
// let t = 0;
// while (t < 3) {
//   console.log(t)
//   t++;
// }

// //BREAK
// //find the index of a character, like string.indexOf()
// let idx;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === 't') {
//     idx = i;
//     break;// since we no longer need to searc the string
//   }
// }

// // CONTINUE
// for (i = 0; i < 5; i++) {
//   if (i > 2 && i < 4) {
//     continue; // skip these numbers!
//   }
//   console.log(i)
// }

// // OBJECT KEYS
// // Accepts an object
// // Returns an array of the object’s keys
// // Keys are in the same order as in a for…in loop
// let weirdObj = {
//   hereIsAKey: 'here is a value',
//   '10': 'number key!',
//   thisIsABooleam: true,
//   '5': 'another numberkey!',
//   nullValue: null
// }
// console.log(Object.keys(weirdObj));

// // OBJECT.VALUES
// Accepts an object
// Returns an array of the object’s values
// Values are in the same order as in a for…in loop

// let weirdOb = {
//   hereIsAKey: 'here is a value',
//   10: 'number key!',
//   thisIsABooleam: true,
//   5: 'another numberkey!',
//   nullValue: null,
// };
// console.log(Object.values(weirdOb));

// // // NESTED ARRAYS
// const tictaktoe = [
//   ['X', 'O', 'X'],
//   ['X', 'O', 'X'],
//   ['X', 'O', 'X']
// ];

// const maze = [
//   [1, 0, 1, 0, 1, 'END'],
//   [0, 1, 0, 0, 1, 0],
//   [0, 0, 1, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0],
//   [1, 1, 1, 0, 0, 1],
//   ['START', 0, 0, 0, 0, 0]
// ];

// // // Iterating over Nested Arrays
// const tictoktoe = [
//   ['X', 'O', 'X'],
//   ['X', 'O', 'X'],
//   ['X', 'O', 'X'],
// ];
// let xCount = 0;

// for (let i = 0; i < tictoktoe.length; i++) {
//   for (let j = 0; j < tictoktoe[i].length; j++) {
//     if (tictoktoe[i][j] === 'X') {
//       xCount++
//     }
//   }
// }

// // //Nested Objects
// let data = {
//   artist: 'The Beatles',
//   albums: [
//     {
//       title: 'Abbey Road',
//       producer: 'George Martin',
//       releaseYear: 1969,
//       numTracks: 17,
//       length: '47:23'
//     },
//     {
//       title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
//       producer: 'George Martin',
//       releaseYear: 1967,
//       numTracks: 13
//     }
//   ]
// };

// // // Iterating over an Array in an object
// for (let album of data.albums) {
//   console.log('The title is', album.title)
// }

// for (num = 1; num <= 20; num++) {
// console.log(`${num}X${num}= ${num}*${num}`)
// }

// for (let j = 30; j >= 0; j -= 5) {
//   console.log(j);
// }

// const examScore = [94, 46, 32, 67, 98, 23, 14]

// for (let i = 0; i < examScore.length; i++) {
//   // console.log(i, examScore[i])
// }
// const myStudents = [
//   {
//     firstName: 'Zues',
//     grade: 86,
//   },
//   {
//     firstName: 'Artemis',
//     grade: 97,
//   },
//   {
//     firstName: 'Hera',
//     grade: 72,
//   },
//   {
//     firstName: 'Apollo',
//     grade: 90,
//   },
// ];

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   // console.log(student);
//   // console.log(`${student.firstName} scored ${student.grade}`)
// }
// // Reveresed LOOP
// const word = 'stressed';
// let reversedWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
// }
// console.log(reversedWord);

// // Finding the average
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   total += student.grade;
// }
// console.log(total / myStudents.length);

// // Nested LOOPs
// for (let t = 1; t <= 10; t++) {
//   console.log('   OUTER LOOP', t);
//   for (y = 10; y >= 0; y-=2) {
//     console.log('INNER LOOP', y)
//   }
// }

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2]
// ];
// let totalSum = 0;
// for (let z = 0; z < gameBoard.length; z++) {
//   let row = gameBoard[z];
//   // console.log(gameBoard[z]);
//   for (let r = 0; r < row.length; r++) {
//     // console.log(row[r])
//     //Suming up
//     totalSum += row[r];
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i)
// }

// let j = 0;
// while (j <= 5) {
//   console.log(j)
//   j++;
// }


// while (guess !== target) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }

// const target = Math.floor(Math.random() * 10)
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (guess === target)break;
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log('CONGRATS YOU WIN!!')

// const subreddits = ['book', 'cringe', 'popheads', 'prophets'];
// for (let sub of subreddits) {
//   console.log(sub)
// }

// for (let char of 'kabareebe') {
//   console.log(char.toUpperCase())
// }

// COMPARIG FOR OF LOOP WITH STANDARD LOOP

const magicSquare = [
  [2,7,6],
  [9,5,1],
  [4,3,8]
]

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0
//   for (j = 0; j < row.length; j++) {
//     sum += row[j]
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// FOR OF LOOP
// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// WHERE FOR OF LOOP IS NOT APPLICABLE
// const word1 = ['mail', 'milk', 'bath', 'black'];
// const word2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < word1.length; i++) {
//   console.log(`${word1[1]}${word2[i]}`);
// }

// // LOOPING OVER OBJECTS
// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   'InBruges': 9,
//   Amadeus: 10,
//   'Kill Bill': 8,
//   'Little Miss Sunshine': 8.5,
//   Caroline: 7.5
// };

// DOES NOT WORK!!!!!!
// for (let X of movieReviews) {
//   console.log(x)
// }

//Object.keys
// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// // Object.values
// const rating = Object.values(movieReviews);
// let sum = 0
// for (let r of rating) {
//   sum += r;
// }
// const avg = sum / rating.length;
// console.log(avg);

// //FINAL EXERCISE FOR LOOPS
// // for Loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // while LOOP
// let j = 0;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// // EVEN NUMBERS TO 20
// for (let i = 0; i <= 20; i+=2) {
//   console.log(i);
// }

// Odd numbers to 20
// let j = 1;
// while (j <= 20) {
//   console.log(j);
//   j+=2;
// }

// Back to ZERO
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
