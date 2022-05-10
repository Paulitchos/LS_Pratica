import "./card.css";
import { PLACEHOLDER_CARD_PATH } from "../../constants/index";
import { CARDS_LOGOS } from "../../constants/index";
import { PLACEHOLDER_CARDBACK_PATH } from "../../constants/index";

function Card(){
    return (
      <>
        <div className="card" data-logo="angular">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[0]} className="card-front" alt="Logo"/>
        </div>
        <div className="card" data-logo="bootstrap">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[1]} className="card-front" alt="Logo"/>
        </div>
        <div className="card" data-logo="html">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[2]} className="card-front" alt="Logo"/>
        </div>
        <div className="card" data-logo="javascript">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[3]} className="card-front" alt="Logo"/>
        </div>
        <div className="card" data-logo="vue">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[4]} className="card-front"alt="Logo" />
        </div>
        <div className="card" data-logo="react">
          <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="Turned pic"/>
          <img src={PLACEHOLDER_CARD_PATH+CARDS_LOGOS[6]} className="card-front" alt="Logo"/>
        </div>
      </>
    );
}



export default Card;