'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');
const cards = document.querySelectorAll('.card');
let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];



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
}

function startGame() {
    btLevel.disabled = true;
    btPlay.textContent = 'Terminar Jogo';
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
        });
    });
}
function stopGame() {
    btPlay.textContent = 'Iniciar Jogo'
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

console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');

let omeuArray = [0,1,2,3,4,5,6,7,8,9];

omeuArray.forEach(
    elemento => {console.log(elemento)}
);

console.log('Ciclo for tradiional')

for(var i=0;i < omeuArray.length;i++){
    console.log(omeuArray[i]);
}

