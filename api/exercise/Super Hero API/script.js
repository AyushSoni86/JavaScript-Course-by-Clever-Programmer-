// 837972860711403 my token
// https://superheroapi.com/api/access-token/character-id/

const SUPERHERO_TOKEN = '837972860711403';
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchBtn');

const searchInput = document.getElementById('heroName');

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=400px width=auto/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImageDiv.innerHTML = 
    `<div class = 'heroInfo'>
        <div>${img}</div>
        <div class = 'hero-stat'><div>${name}</div><div>${stats.toUpperCase()}</div></div>
    </div>`
}

const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const hero = json
            showHeroInfo(hero);
        })
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0];
            console.log(hero);
            showHeroInfo(hero);
        })
}


const getRandom = () => Math.ceil(Math.random() * 731);

getHero.onclick = () => getRandomSuperHero(getRandom());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);




