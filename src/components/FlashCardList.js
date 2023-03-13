import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({flashCards, onHandleDelete}) {

    const displayedCards = flashCards.map(card => <FlashCard id={card.id} key={card.id} question={card.question}
        answer={card.answer} topic={card.topic} onHandleDelete={onHandleDelete}/>)

    return (
        <div>
            {displayedCards}
        </div>
    )
}

export default FlashCardList
