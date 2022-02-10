'use strict';

// FOR LOOPS

// Great for doing someting a # amount of times
// great for iterating over/through arrays

// ANATOMY OF A FOR LOOP

// For(starting value; condition; increment){
//.    code block -- do someting each iteration
//}

let students = ['thomas', 'eden', 'marcus', 'cole', 'jason'];

for(let i=0; i < students.length; i++) {
  console.log(`Hello ${students[i]}!`);
  if(students[i] === 'marcus'){
    console.log(`Whats up marcus!`)
  }
}

Oneiteration - i = 0, i < 5 (true);
consol.log (`hey! ${students[0]}!`);
// i gets incremented
// 2nd iteration - i = 0, i < 5 (true);
// consol.log (`hey! ${students[0]}!`);
// i gets incremented
// 3rd iteration - i = 0, i < 5 (true);
// consol.log (`hey! ${students[0]}!`);
// i gets incremented
// 4th iteration - i = 0, i < 5 (true);
// consol.log (`hey! ${students[0]}!`);
// i gets incremented
// 5th iteration - i = 0, i < 5 (true);
// consol.log (`hey! ${students[0]}!`);
// i gets incremented

// WHILE LOOPS
// Great for doing something however many times you need until ancondition goes false.

//. ANATOMY OF A WHILE LOOP

// while(condition){
//. do someting until the condition is false
// }

// let myNumber = 4;
// let userNumber = prompt('what nuber am i thinking of?');

// while(userNumber != myNumber){
//   userNumber = prompt('what number an I thinking of?');
//   if(userNumber == myNumber){
//     alert('you are correct.')
//   }
// }

let students = ['thomas', 'eden', 'marcus', 'cole', 'jason'];

// this is a function that will return a random studnet from my array.
function getRandomStudent(){
  let randomIdx = Math.floor(Math.random * students.lenght);
  let randomStudent = students[randomIdx];
  return randomStudent;
}

let clueGuesses = 5;
let suspect = 'marcus';
let foundSuspect = false;

//.      5         &&.      true
while(clueGuesses && !foundSuspect){
  let myGuess = getRandomStudent();
  console.log(`it was ${myGuess}, with the knife!
Guesses: ${clueGuesses}`);
  clueGuesses--;
  if(myGuess === suspect){
    foundSuspect === true
  }
}