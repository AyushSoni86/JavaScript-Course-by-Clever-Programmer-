// Test you code by forking this repl: 
// 👉 

// Write a function that takes in an array of numbers and returns the largest number

function findMax (array) {
  let max = array[0];
  for(const num of array){
    if(num > max){
        max = num;
    }
  }
  return max;
}

let array = [1,4,72,5,83,6,9];
console.log(findMax(array));
//Topics: loops, arrays, conditions,