import React from "react";
import { useState,useEffect } from "react";
import "./game-panel.css";
import { Card } from "../index";
import { isGameOberModalOpen } from "../game-over-modal/game-over-modal.component"

function GamePanel({ selectedLevel, cards }) {

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

      useEffect(() => {
        if (!isGameOberModalOpen) {
          setFlippedCards([]);
          setMatchedCards([]);
        }
      })

    const processMatchingCards = () => {
      const [card1, card2] = flippedCards;
      const cardsAreEqual = card1.name === card2.name;
        if (cardsAreEqual) {
          setTimeout(() => {
            setMatchedCards((previousState) => [
              ...previousState,
              ...flippedCards,
            ]);
            setFlippedCards([]);
          }, 500);
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 500);
        }
      };

  
  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {cards.map((card) => (
          <Card
            key={card.key}
            card={card}
            onClickCard={handleClickCard}
            flipped={checkIfIsFlipped(matchedCards, flippedCards, card.id)}
            matched={checkIfIsMatched(matchedCards, card.id)}
          />
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
