import React from "react";

import "./game-panel.css";
import { Card } from "../index";

function GamePanel({ selectedLevel, cards }) {
  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
