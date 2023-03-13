import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({topic, flashCards, onHandleDelete}) {

    const filteredCards = flashCards.filter(card => card.topic === topic)

    const displayedCards = filteredCards.map(card => <FlashCard id={card.id} key={card.id} question={card.question}
        answer={card.answer} topic={card.topic} onHandleDelete={onHandleDelete}/>)

    return (
        <div>
            {displayedCards}
        </div>
    )
}

export default FlashCardList
