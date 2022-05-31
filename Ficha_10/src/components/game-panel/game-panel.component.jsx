import React from "react";
import "./game-panel.css";
import { Card } from "../index";

function GamePanel(props) {
  const { cards, selectedLevel} = props;
  let gameClasse = "";
  
  if (selectedLevel === "1"){
    gameClasse = "intermedio";
  } else if(selectedLevel === "2"){
    gameClasse = "avançado";
  } else{
    gameClasse = "";
  }
  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={`${gameClasse}`}>
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
