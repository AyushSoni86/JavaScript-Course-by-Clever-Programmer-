// 837972860711403 my token
// https://superheroapi.com/api/access-token/character-id/

const SUPERHERO_TOKEN = '837972860711403';
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchBtn');

const searchInput = document.getElementById('heroName');
// console.log(heroNames);

const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.image.url)
            heroImageDiv.innerHTML = `<img src =${json.image.url} height = 400px width = auto>`
        })
}

const getSearchSuperHero = (name) =>{
    // console.log();
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        heroImageDiv.innerHTML = `<img src =${hero.image.url} height = 400px width = auto>`
    })
}

const getRandom = () => Math.ceil(Math.random() * 731);

getHero.onclick = () => getRandomSuperHero(getRandom());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);




