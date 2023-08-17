const p1 = {
    id: 1,
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    id: 2,
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

const p1wins = document.querySelector('#p1wins');
const p2wins = document.querySelector('#p2wins');

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.textContent = player.score;
            const winTableUpdate = document.querySelector(`#p${player.id}wins`);
            winTableUpdate.textContent = parseInt(winTableUpdate.textContent) + 1;
            setTimeout(function () { alert(`Player ${player.id} wins the game!`) }, 100);
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    isGameOver = false;
}
