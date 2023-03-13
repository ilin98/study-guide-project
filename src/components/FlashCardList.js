import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({topic, flashCards, onHandleDelete}) {

    const filteredCards = flashCards.filter(card => {
        if (card.topic === topic){
            return card
        } else if (topic === "All")
            return card
    })

    const displayedCards = filteredCards.map(card => <FlashCard id={card.id} key={card.id} question={card.question}
        answer={card.answer} topic={card.topic} onHandleDelete={onHandleDelete}/>)

    return (
        <div className="cardList">
            {displayedCards}
        </div>
    )
}

export default FlashCardList
