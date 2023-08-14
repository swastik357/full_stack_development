const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
