'use strict';

/* ========================= 1 ========================== */

/* ========================= A) ========================== */

//message que permite aceder ao elemento #message 
const message = document.querySelector('#message');
//panelControl que permite aceder ao elemento #panel-control
const panelControl = document.querySelector('#panel-control');
//panelGame que permite aceder ao elemento #panel-game
const panelGame = document.querySelector('#panel-game');
//btLevel que permite aceder ao elemento #btLevel
const btLevel = document.querySelector('#btLevel');
//btPlay que permite aceder ao elemento #btPlay
const btPlay = document.querySelector('#btPlay');

const gameStarted = document.querySelectorAll('.gameStarted');

/* ========================= B) ========================== */

// 1)

function reset() {
    panelGame.style.display = 'none';
    message.textContent = '';
    message.classList.remove('hide');
    for (let i of gameStarted) {
        i.classList.add('hide');
    }
    if (btLevel.value == '0'){
        btPlay.disabled = true;
    }
    else{
        btPlay.disabled = false;
        panelGame.style.display = 'grid';
    }
    

}
reset();

/* ========================= 2 ========================== */

/* ========================= A) ========================== */
/*
if (btLevel.value == '0'){
    btPlay.disabled = true;
}
else{
    btPlay.disabled = false;
}
*/


/* ========================= B) ========================== */

/*
if (btLevel.value == '0'){
    btPlay.disabled = true;
}
else{
    btPlay.disabled = false;
    panelGame.style.display = 'grid';
}
*/

/* ========================= C) ========================== */

btLevel.addEventListener('click',reset);

/* ========================= 3 ========================== */

/* ========================= A) ========================== */

btPlay.addEventListener('click',function(){
    if (btPlay.textContent == 'Iniciar Jogo'){
        startGame();
    }
    else if(btPlay.textContent == 'Terminar Jogo') {
        stopGame();
    }
    });

/* ========================= B) ========================== */
function startGame(){
    btPlay.textContent = 'Terminar Jogo';
    btLevel.disabled = true;
    for (let i of gameStarted) {
        i.classList.remove('hide');
    }
    message.classList.add('hide');
}
/* ========================= C) ========================== */
function stopGame(){
    btPlay.textContent = 'Iniciar Jogo';
    btLevel.disabled = false;
    reset();
}
/* ========================= 4 ========================== */

panelGame.addEventListener('click',function(){
    if (message.textContent == ''){
        message.textContent = 'Clique em Iniciar Jogo!';
    }
    else if (message.textContent == 'Clique em Iniciar Jogo!'){
        message.textContent = '';
    }
    });