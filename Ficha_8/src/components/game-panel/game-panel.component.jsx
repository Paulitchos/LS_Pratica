import "./game-panel.css";
import { Card } from "../index";

function GamePanel(){
    return (
        <section className="game-panel">
          <div id="game">
            <Card></Card>
          </div>
        </section>
    );
}


export default GamePanel;

