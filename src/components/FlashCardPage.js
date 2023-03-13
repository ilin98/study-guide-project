import React, { useState } from "react";
import FlashCardList from "./FlashCardList";
import NewFlashCardForm from "./NewFlashCardForm";
import Filter from "./Filter";

function FlashCardPage({flashCards, handleSetFlashCards}) {
    const [filter, setFilter] = useState("All")

    function handleTopicChange(value) {
        setFilter(value)
    }


    function handleAddCard(newCard) {
        handleSetFlashCards([...flashCards, newCard])
    }

    function handleDelete(deleteCard) {
        const newList = flashCards.filter(card => card.id !== Number(deleteCard.id))
        handleSetFlashCards(newList)
    }


    return (
        <div>
            <NewFlashCardForm onAddCard={handleAddCard}/>
            <Filter topic={filter} onTopicChange={handleTopicChange} />
            <FlashCardList topic={filter} flashCards={flashCards} onHandleDelete={handleDelete} />
        </div>
    )
}

export default FlashCardPage
