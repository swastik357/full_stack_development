const jokes = document.querySelector('#jokes');
const buttonClick = document.querySelector('#click');
const buttonClear = document.querySelector('#clear');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! TRY AGAIN LATER !"
    }

}

buttonClick.addEventListener('click', addNewJoke);
buttonClear.addEventListener('click', () => {
    jokes.innerHTML = "";
    window.location.reload();
});