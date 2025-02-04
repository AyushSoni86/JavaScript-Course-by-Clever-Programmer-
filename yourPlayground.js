
// user input
// fruit = prompt("what is your favourite fruit ?");
// console.log(fruit);

// console.log(Math.floor(Math.random() * 30));

// Automatic tip calculator
function tipCalculate() {
  food = prompt("How much was the food ?");
  tipPercentage = prompt("Tip %") / 100;
  tipAmount = food * tipPercentage;
  alert("The tip amount is " + tipAmount);

  console.log("The total amount is ", Number(tipAmount) + Number(food));
}

// simple wheater practice code
function wheatherApp() {
  let wheather = prompt("What is the weather ?");
  if (wheather == "rain") {
    console.log("Grab your umbrella");
  } else {
    console.log("Wear your sunglasses");
  }
}

// this function prints my name
function greeting(name) {
  console.log(`Hey ${name}, how are you?`);
}
// greeting("Ayush")

function sum(a, b) {
  return a + b;
}
// Basic tip calculator
function tipCalculator(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = tipPercentage * food;
  const total = sum(tipAmount, food);
  return total;
}
const tipCalculatorArrow = (food, tip) => {
  const tipPercentage = tip / 100;
  const tipAmount = tipPercentage * food;
  const total = sum(tipAmount, food);
  return total;
};
// console.log("The total amount pof food  is ", tipCalculatorArrow(10000, 5));

// Arrow functions
const sumArrow = (a, b) => {
  return a + b;
};

// Arrays

// let groceries= ['apple', 'banana', 'pear', 'orange','berry'];
// console.log(groceries);
// groceries.push("pineapple");
// console.log(groceries)
// console.log(groceries.length);
// slicedArray = groceries.slice(1,3);
// console.log(slicedArray);

// Objects
// dot notation and bracket notation in objects
const person = {
  name: "Ayush",
  shirt: "black",
  email: "ayusoni86@gmail.com",
};
person.phone = "9588422464";

// console.log(person.name)
// console.log(person.shirt)
// console.log(person.email)

// console.log(person['name'])
// console.log(person['shirt'])
// console.log(person['email'])

// console.log(person)

const introducer = (name, shirt, mobile) => {
  const person = {
    name: name,
    shirt: shirt,
    mobile: mobile,
    assets: 100000,
    liability: 50000,
    networth: function () {
      return this.assets - this.liability;
    },
  };
  return `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}
   and I have ${person.mobile} and my nte worth is ${person.networth()} USD `;
};
// console.log(introducer("Ayush", "Blue", "iPhone 13"));

// for loop in javascript
const fruits = [
  "apple",
  "banana",
  "pear",
  "orange",
  "berry",
  "banana",
  "pear",
  "orange",
  "berry",
  "banana",
  "pear",
  "orange",
  "berry",
  "banana",
  "pear",
  "orange",
  "berry",
];

// for (let index = 0; index < fruits.length; index++) {
//     console.log(index , fruits[index]);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }
// for (nums of number){
//     console.log(nums);
// }

// let res = [];
// for (const nums of number) {
//     res.push(nums * 2);
// }
// console.log(res);

// function to double the array elements
const double = (number) => {
  let res = [];
  for (nums of number) {
    res.push(nums * 2);
  }
  return res;
};

// console.log(double([1,2,3,4,5,8,9]));
// function to square the array elements
const square = (number) => {
  let result = [];
  for (const num of number) {
    result.push(num * num);
  }
  return result;
};

// console.log(square([2,3,4,5,6]));

//letter counter using loops
const letterCounter = () => {
  const phrase = "hey, can you come to grocery store with me";
  let cnt = 0;
  for (letter in phrase) {
    cnt++;
  }
  return cnt;
};
// console.log(letterCounter());

// sum of array elements
const sumArray = (number) => {
  let res = 0;
  for (const num of number) {
    res = res + num;
  }
  return res;
};
const num = [10, 2, 3, 4];
// console.log(sumArray(num));

// finding max element from array
const maxElement = (number) => {
  max = number[0];
  for (const num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
// console.log(maxElement(num));


//continuing the loops questions
// letter frequency calculator
const letterFrequency = (phrase) => {
  let frequency = {};
  // console.log(phrase);
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}
// console.log(letterFrequency(phrase));

// word frequency calculator
const wordFrequency = (phrase) => {
  let frequency = {};
  words = phrase.split(' ');
  // console.log(words);
  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

// words frequency using pre created function
const wordFrequency2 = (phrase) => {
  words = phrase.split(' ');
  return letterFrequency(words);
}

// let phrase = 'hello world hello hey there hey hello';
// phrase= prompt('Write your sentecne : ');
// console.log(wordFrequency2(phrase));


// higher order functions 
// map, reduce and filter

// map 
let array = [1, 2, 3, 4, 5, 6];
array.map(number => {
  number = number * 2;
  // console.log(number)
});

let array2 = [1, 2, 3, 4, 5, 6].map(number =>
  number = number * 2
);

// console.log(array);
// console.log(array2);

const doubleMap = (number) => {
  return number.map(number => number * 2);
}
// console.log(doubleMap([1, 2, 3, 4, 5, 6]));

// filter
const filter = (number, gt) => {
  let result = [];
  for (const num of number) {
    if (num > gt) {
      result.push(num);
    }
  }
  return result;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.filter(num => num >= 3 && num < 7));

const actor = [
  { name: 'Vaibhavi', networth: 12 },
  { name: 'Kshitij', networth: 150 },
  { name: 'Amardeep', networth: 32 },
  { name: 'Ayush', networth: 999 },
  { name: 'Abhishek', networth: 21 },
];

let result = actor.filter(actor => actor.networth > 12);
// console.log(result);

// this line creates an array of names from the actor object and join them by using join method
let names = result.map(actor => actor.name).join(', ');

// playground.innerHTML = `<h2>${result[0].name}</h2>`;
// playground.innerHTML = `<h1>${names}</h1>`;


// reduce




