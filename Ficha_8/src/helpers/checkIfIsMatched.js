function checkIfIsMatched(matchedCards, cardId) {
     return matchedCards.filter((mc) => mc.id === cardId).length > 0;
}

export default checkIfIsMatched;