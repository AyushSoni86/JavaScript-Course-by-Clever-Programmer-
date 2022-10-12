// console.log('Hello')

// let title = document.getElementById('title');

// console.log(title.innerText);

// let message = "Nikal Bhosdike"


// title.innerText = message
// console.log(title.innerText);

// title.innerHTML = `<p>${message}</p>`;

// title.style.color = 'red'

// let redDiv = document.getElementById('red');
// let greenDiv = document.getElementById('green');
// let blue = document.getElementById('blue');

// redDiv.onclick = () => console.log('red')
// greenDiv.onclick = () => console.log('green')
// blue.onclick = () => console.log('blue')

let squares = document.querySelectorAll('.colorSquare')
console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// using a foreach loop 
const timesClicked = { 'red': 0, 'blue': 0, 'green': 0 }

squares.forEach(squares => {
    squares.onclick = () => {
        timesClicked[squares.value] += 1;
        squares.innerText = timesClicked[squares.value];
    }
})

function clearScore() {
    timesClicked.red = 0;
    timesClicked.green = 0;
    timesClicked.blue = 0;
    squares.forEach(squares => {
        squares.innerText = "";
    });
}
const clearGame = document.getElementById('clear-score');
clearGame.onclick = () => clearScore()