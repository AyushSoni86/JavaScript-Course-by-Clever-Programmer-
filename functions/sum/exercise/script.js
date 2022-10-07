/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  if(b==0){
    console.log("cannot divide by 0")
    return;
  }
  return a / b;
}

function mul(a, b) {
  return a * b;
}

// ES6 version of functions

const addArrow = (a, b) => a + b;


const subArrow = (a, b) => a - b;


const divArrow = (a, b) => a / b;


const mulArrow = (a, b) => a * b;


console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

console.log(addArrow(20, 50));
console.log(subArrow(20, 50));
console.log(mulArrow(20, 50));
console.log(div(20, 0));