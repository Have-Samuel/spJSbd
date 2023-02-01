// function difference(x, y) {
//   return x - y;
// }
// difference();

// function product(x, y) {
//   return x * y;
// }
// product();

// function printDay(num) {
//   const stream = {
//     1: 'sunday',
//     2: 'monday',
//     3: 'tuesday',
//     4: 'wedensday',
//     5: 'thrusday',
//     6: 'friday',
//     7: 'saturday'
//   }
//   return stream[num];
// }

// function lastElement(arr) {
//   return arr[arr.length - 1];
// }

// function numberCompare(num1, num2) {
//   if (num1 === num2) {
//     return 'Numbers are equal!'
//   } else if (num1 > num2) {
//     return 'First is greater!'
//   } else {
//     return 'Second is greater!'
//   }
// }

// function singleLetterCount(steam, letter) {
//   let something = 0;
//   for (let i = 0; i < steam.length; i++) {
//     if (steam[i].toLowerCase() === letter.toLowerCase()) {
//       something++;
//     }
//   }
//   return something;
// }

function multipleLetterCount(str) {
  let finalObj = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]] === undefined) {
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}