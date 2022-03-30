'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');
const cards = document.querySelectorAll('.card');
let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];
let flippedCards;
let totalFlippedCards;
let totalPoints;




// Algoritmo Fisher-Yates -  Algoritmo que baralha um array.
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// ------------------------
// Funções Jogo memória
// ------------------------
function reset() {
    btLevel.value = 1;
    startGame();
}

function flipCard(c) {
    c.classList.add('flipped');
    flippedCards.push(c);
    if (flippedCards.length == 2){
        checkPair();
    }
}
function checkPair() {
    const [card1,card2] = flippedCards;
    if (card1.dataset.logo == card2.dataset.logo){
        console.log('As cartas são iguais');
        card1.classList.add('inative');
        card2.classList.add('inative');
        card1.querySelector('.card-front').classList.add('grayscale');
        card2.querySelector('.card-front').classList.add('grayscale');
        totalFlippedCards += 2;
        updatePoints();
        if (gameOver()) stopGame();
    }
    else{
        console.log('Cartas são diferentes');
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 500);
        };
        card1.addEventListener('click', function () {
            flipCard(this);
        }, {once: true});
        card2.addEventListener('click', function () {
            flipCard(this);
        }, {once: true});
        updatePoints(false);

    flippedCards= [];
}
    


function startGame() {
    btLevel.disabled = true;
    btPlay.textContent = 'Terminar Jogo';
    flippedCards = [];
    totalFlippedCards = 0;
    totalPoints = 0;
    shuffleArray(cardsLogos);
    let [indice, newCardLogos] = [0, cardsLogos.slice(0, cards.length / 2)];
    newCardLogos = [...newCardLogos, ...newCardLogos];
    cards.forEach(card => {
        const randomNumber = Math.floor(Math.random() * newCardLogos.length) + 1;
        card.style.order = randomNumber;
        card.querySelector('.card-front').src = `images/${newCardLogos[indice]}.png`;
        card.dataset.logo = newCardLogos[indice++];
        card.addEventListener('click', function () {
            flipCard(this);
        }, {once: true});
    });
    
}
function stopGame() {
    btPlay.textContent = 'Iniciar Jogo'
    modalGameOver.style.display = 'block';
    cards.forEach(card => {
        card.classList.remove('flipped');

        card.classList.remove('inative');

        card.classList.remove('inative');

        card.querySelector('.card-front').classList.remove('grayscale');
        });
}

function updatePoints(operacaoSoma = true) {

    // if (operacaoSoma) totalPoints += (timer * (cards.length / 2));

    if (operacaoSoma) totalPoints += (cards.length - totalFlippedCards + 2) * 2;

    else totalPoints < 2 ? totalPoints = 0 : totalPoints -= 2;

    labelPoints.textContent = totalPoints;

}

const gameOver = () => {

    if (totalFlippedCards == cards.length) return true;

    return false;

}

// --------------------------------------------------------
// Event Listeners
// --------------------------------------------------------
btPlay.addEventListener('click', function () {
    if (btPlay.textContent === 'Terminar Jogo')
        stopGame()
    else startGame();
});

reset();




