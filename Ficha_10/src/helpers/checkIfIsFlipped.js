import checkIfIsMatched from "./checkIfIsMatched";

function checkIfIsFlipped(matchedCards, flippedCards, cardId) {
     const cardHasBeenFlipped = flippedCards.filter((fc) => fc.id === cardId).length > 0;
     const cardHasBeenMatched = checkIfIsMatched(matchedCards, cardId);

     if (cardHasBeenFlipped || cardHasBeenMatched) {
          return true;
     }
     return false;
}

export default checkIfIsFlipped;