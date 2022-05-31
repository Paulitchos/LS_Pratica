import "./assets/styles/App.css";
import React from 'react';
import { useState, useEffect } from "react";
import { CARDS_LOGOS } from "./constants/index.js";
import { shuffleArray } from "./helpers/index.js";


import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
} from "./components";



function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [cards, setCards] = useState([]);

  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    let numOfCards;
    switch (value) {
      // Level: Beginner
      case "1":
        numOfCards = 3;
        break;
      // Level: Intermediate
      case "2":
        numOfCards = 6;
        break;
      // Level: Advanced
      case "3":
        numOfCards = 10;
        break;
      default:
        numOfCards = 0;
        break;
    }
    const initialCards = shuffleArray(CARDS_LOGOS);
    const slicedInitialCards = initialCards.slice(0, numOfCards);

    // array com 2 imagens de cada tipo
    const doubledCardsObjects = [];

    slicedInitialCards.forEach((card, index) => {
      doubledCardsObjects.push({
        key: `${card}-${index}`,
        id: card,
        name: card,
      });

      doubledCardsObjects.push({
        key: `${card}-${index}-clone`,
        id: `${card}-clone`,
        name: card,
      });
    });

    const doubledShuffledCardsObjects = shuffleArray(doubledCardsObjects);
    setCards([...doubledShuffledCardsObjects]);
  };

  

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          selectedLevel={selectedLevel}
        />
        <GamePanel cards = {cards} selectedLevel={selectedLevel} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
