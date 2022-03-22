'use strict';
// ------------------------
// Variáveis Globais
// ------------------------
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#panel-game');
const btLevel = document.querySelector('#btLevel');




// ------------------------
// Funções Lógica do Jogo
// ------------------------




// ------------------------
// Funções Genéricas
// ------------------------

function reset() {
    btLevel.value = 1;
    startGame();
}
function startGame() {
    btLevel.disabled = true;
    btPlay.textContent = 'Terminar Jogo';
}

function stopGame() {
    btPlay.textContent = 'Iniciar Jogo'
}

reset();

// ------------------------
// Event Listeners
// ------------------------
btPlay.addEventListener('click', function () {
    if (btPlay.textContent === 'Terminar Jogo')
        stopGame()
    else startGame();
});
