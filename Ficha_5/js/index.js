'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');
let cards = panelGame.querySelectorAll('.card');


let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];
let flippedCards = [];
let totalFlippedCards = 0;
let cardsListeners;
const TIMEOUTGAME =20;
const labelGameTime = document.getElementById('gameTime');
let timer;
let timerID;
const labelPoints = document.getElementById('points');
let totalPoints;
const messageGameOver = document.getElementById('messageGameOver');

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

function flipCard(selectedCard) {
    selectedCard.classList.add('flipped');
    flippedCards.push(selectedCard);
    if (flippedCards.length === 2)
        checkPair();
}

const gameOver = () => { return totalFlippedCards === cards.length; }

function checkPair() {
    let [card1, card2] = flippedCards;
    const isMatch = (card1.dataset.logo === card2.dataset.logo);
    if (isMatch) {
        setTimeout(() => {
            card1.classList.add('inative');
            card2.classList.add('inative');
            card1.querySelector('.card-front').classList.add('grayscale');
            card2.querySelector('.card-front').classList.add('grayscale');
            totalFlippedCards += 2;
            if (gameOver()) stopGame();
        }, 500);
        updatePoints();
    }
    else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            createEventListenerFlipCard(card1);
            createEventListenerFlipCard(card2);
        }, 500);
        updatePoints(false);
    }
    
    flippedCards = [];
}

const createAndShuffleCards = array => {
    shuffleArray(array);
    array.splice(cards.length / 2, Number.MAX_VALUE);
    array.push(...array);
    shuffleArray(array)
}

function startGame() {
    btPlay.textContent = 'Terminar Jogo';
    let [indice, newCardLogos] = [0, [...cardsLogos]];
    timer = TIMEOUTGAME;
    timerID = setInterval(updateGameTime, 1000);
    totalPoints = 0;
    createAndShuffleCards(newCardLogos);
    cards.forEach(card => {
        card.querySelector('.card-front').src = `images/${newCardLogos[indice]}.png`;
        card.dataset.logo = newCardLogos[indice++];
        createEventListenerFlipCard(card);
    });
    flippedCards = [];
    totalFlippedCards = 0;
    
}

function stopGame() {
    modalGameOver.style.display = 'block';
    btPlay.textContent = 'Iniciar Jogo';
    clearInterval(timerID);
    messageGameOver.textContent = totalPoints;
}

function reset() {
    btLevel.value = 1;
    for (let card of cards) card.classList.remove('flipped');
    labelGameTime.removeAttribute('style');
    createPanelGame();
}

function updateGameTime(){
    timer--;
    labelGameTime.textContent = `${timer}`;

    if (timer <= 10){
        labelGameTime.style.background= 'Red';
    }
    if (timer == 0){
        stopGame();
    }
}

function updatePoints(operacaoSoma = true) {

    if (operacaoSoma) {
        if (btLevel.value == 1)
            totalPoints += (timer * 3);
        else if (btLevel.value == 2)
            totalPoints += (timer * 4);
        else if (btLevel.value == 3)
            totalPoints += (timer * 5);
    }

    else totalPoints < 5 ? totalPoints = 0 : totalPoints -= 5;
    console.log(totalPoints);
    labelPoints.textContent = totalPoints;

}


// --------------------------------------------------------
// Event Listeners
// --------------------------------------------------------
btPlay.addEventListener('click', function () {
    if (btPlay.textContent === 'Terminar Jogo')
        stopGame()
    else startGame();
});

btLevel.addEventListener('change',createPanelGame);

const createEventListenerFlipCard = (c) => {
    c.addEventListener('click', function fc() {
        flipCard(this);
    }, { once: true });
}

const backupCards = [...cards];
function createPanelGame() {
    panelGame.innerHTML = "";
    panelGame.className = '';
    let numero_cartas = 6;

    if (btLevel.value == 1){
       

        panelGame.classList.add('basico');
    }
    else if (btLevel.value == 2){
        numero_cartas = 12;
        panelGame.classList.add('intermedio');
    }
    else if (btLevel.value == 3){
        numero_cartas = 20;
        panelGame.classList.add('avancado');
    }

    let div = document.createElement('div'); 
    div.setAttribute('class', 'card'); 
    let imgBack = document.createElement('img'); 
    imgBack.setAttribute('src', 'images/ls.png'); 
    imgBack.setAttribute('class','card-back');
    let imgFront = document.createElement('img'); 
    imgFront.setAttribute('class','card-front');
    div.appendChild(imgBack);
    div.appendChild(imgFront);
     
    for (let index = 0; index < numero_cartas; index++) {     
        panelGame.appendChild(div.cloneNode(true));  
    }
    cards = panelGame.childNodes;
    
}
    

reset();