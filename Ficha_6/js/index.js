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

let topGamers = [ {nickname: 'Ze', points: 331 }, {nickname: 'Maria' , points: 50 }];

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

(function getLocalStorage(){
    localStorage.getItem('nickname');
    localStorage.getItem(topGamers);
})();

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
    getTopPoints();
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
    checkTop10(totalPoints);
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

function getTop10(){
    let infoTop = document.getElementById('infoTop');
    let arrayTop10 = "";

   /* for (let i = 0; i < topGamers.length; i++) {
        arrayTop10 += `${topGamers[i].nickname} - ${topGamers[i].points}<br>` ;
        console.log(arrayTop10);
    }

    infoTop.innerHTML = arrayTop10;*/

    infoTop.innerHTML = "";

    let div = document.createElement('div'); 
    let p1 = document.createElement('p'); 
    p1.textContent = 'Nick Name'; 
    let p2 = document.createElement('p'); 
    p2.textContent = 'Pontuação'; 
    div.appendChild(p1);
    div.appendChild(p2);
     
    for (let i = 0; i < topGamers.length; i++) {     
        infoTop.appendChild(div.cloneNode(true));  
        div.firstChild.textContent = `${topGamers[i].nickname}`;
        div.lastChild.textContent = `${topGamers[i].points}`;
    }
    
    infoTop.appendChild(div);
    
}

function getTopPoints(){
let pointsTop = document.getElementById('pointsTop');
pointsTop.innerHTML= `${topGamers[0].points}`;
}

function getLastPoints(){
    let index_do_ultimo = topGamers.length;
    let lastpoints=0;

    lastpoints = topGamers[index_do_ultimo-1].points;

    console.log(`${topGamers[index_do_ultimo-1].points}`);

    return lastpoints;
}

function checkTop10(totalPoints){
    let lastpoints = getLastPoints();
    let nick = document.getElementById('nickname');

    if(topGamers.length < 10 || totalPoints > lastpoints){
        nick.style.display = 'block';
        messageGameOver.innerHTML += "<br>Parabéns! Entrou no Top 10";
    }

}

function saveTop10(){
    let inputNick = document.getElementById('inputNick').value;
    localStorage.setItem('Nickname', inputNick);

    const novosPontos = {nickname: inputNick, points: totalPoints};
    const dimTopGamers = topGamers.length;
    
    let userExists = false;
    topGamers.forEach((gamer,index) =>{
        if(gamer.nickname === inputNick){
            userExists = true;
            topGamers[index].points = totalPoints;
        }
    
    })

    if(userExists === false){
        topGamers.push(novosPontos);
    }

    topGamers.sort(function (a, b) { return b.points - a.points });

    if(dimTopGamers > 10){
        topGamers.pop();
    }

    localStorage.setItem(topGamers, JSON.stringify({nickname:nickname, points: totalPoints}));

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

btTop.addEventListener('click', function () {
    getTop10();
});

okTop.addEventListener('click', function(){
    saveTop10();
    modalGameOver.style.display = "none";
    reset();
});

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