/* 1 - Create the following variables
name, which is a string set to your current name
dayOfBirth, which is a number set to the day of your birth month
*/
const name = 'Have';
const dayOfbirth = 02;
/*
See what happens when you have multiple variables of the same name. Which one takes precedence?
*/
let myName = 'Cooking';
let myName = 'Running';
let myName = 'Gluing'; // Error

let yourName = 'something';
yourName = 'nothing';

// The value of yourName si nothing
/*
Write some JavaScript that prompt’s the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.
*/
let theCalledPrompt = prompt('Select your favourite color!');

console.log('Your favorite color is' + theCalledPrompt);

/*
Create a string that contains both single quotes and double quotes.
*/
let person = "Your won't 'work it out if you don't practice'"

/*
What is the difference between null and undefined?
*/
// null is for the purpose of explicitly defining 'no' value,
// while undefinedis the default value for varibles the are not assigned.
// null can be assigned to a variable theat wil change in the future.
// While undefined is when you declare a variable and its not assigned to anything, hence undefined

/*
What is NaN in JavaScript? What is the typeof NaN?
 */
// NaN => means not a number, and typeof => 'number'
// NaN is a value JavaScript returns when trying to do a numerical operation
// on something that is not a number. typeof NaN is "number"
// (which is unfortunately a very confusing part of JavaScript)
/*
You can declare a variable by typing let thing;. What is the value of thing? 
*/

// The value of thing is undefined
// 