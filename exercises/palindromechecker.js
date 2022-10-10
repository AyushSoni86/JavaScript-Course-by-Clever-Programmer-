// Test you code by forking this repl: 
// 👉 


// Write a function that takes in string and checks if it is a Palindrome
// A palindrome is a word that is the same forwards and backwards!
// Ex: racecar -> racecar

function isPalindrome (string) {
  let i = 0;
  let j = string.length -1 ;
  while(i < j){
    if(string.charAt(i) != string.charAt(j)){
      return false;
    }
    else{
      i++;
      j--;
    }
  }
  return true;
  // Should return true IF it's a palindrome
}

let string = 'hellolleh';
console.log(isPalindrome(string));

//Topics: Strings, loops