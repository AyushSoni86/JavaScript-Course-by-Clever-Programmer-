// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage');
const dogBtn = document.getElementById('dogButton')

// stuff you have to wait for
// asynchronous programming
// .then - promises
const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            // console.log(json.message);
            dogImageDiv.innerHTML =
                `<center><img src = '${json.message}'/></center>`
        });
}


dogBtn.onclick = () => getDog();