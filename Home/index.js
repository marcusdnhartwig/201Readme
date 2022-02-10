'use strict';

// function delaration
function greeting(){
  console.log('hello there!');
}

greeting();

// function expression

// let newGreeting = function(){
//   console.log('this is a new greeting');
// }

// newGreeting();

function namedGreeting(firstName, lastName){
  console.log(`hello ${firstName} ${lastName}!`);
}

namedGreeting('Marcus', 'Hartwig');

// function returns

function multiply(a,b){
  return a*b;;
}
let product = multiply(2,2);
console.log(product);

function subtraction(a,b = 0){ //w/default parameter
  return a-b;
}
let answer = subtraction(10, 20);
console.log(answer);

//function w/ multiple returns

function sum(a,b){
  return [a+b, 'this will help on friday!'];
}

let addition = sum(6,6); //[0]will only give the sum w/out the string
console.log(addition);