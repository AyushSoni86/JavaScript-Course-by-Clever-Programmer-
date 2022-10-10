// Test you code by forking this repl:
// 👉

// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// let arr = [2, 5, 8, 3, 6, 9, 1, 4, 7];
// console.log(arr);
// sortArray(arr);
// console.log(arr);
// BONUS sort the array without using .sort()
