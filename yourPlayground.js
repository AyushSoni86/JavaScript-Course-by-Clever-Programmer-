// console.log("hello world");
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
    let wheather = prompt('What is the weather ?');
    if (wheather == "rain") {
        console.log("Grab your umbrella");
    }
    else {
        console.log("Wear your sunglasses")
    }
}

// this function prints my name
function greeting(name) {
    console.log(`Hey ${name}, how are you?`)
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
}
console.log("The total amount pof food  is ", tipCalculatorArrow(10000, 5));


// Arrow functions 
const sumArrow = (a, b) => {
    return a + b;
}

// Arrays 

// Objects
const introducer = (name, shirt, mobile) => {
    const person = {
        name: name,
        shirt: shirt,
        mobile: mobile
    };   
    return `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and I have ${person.mobile} `;
}
console.log(introducer("Ayush", "Blue", "iPhone 13"));