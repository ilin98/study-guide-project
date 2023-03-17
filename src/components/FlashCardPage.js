import React, { useState } from "react";
import FlashCardList from "./FlashCardList";
import NewFlashCardForm from "./NewFlashCardForm";
import Filter from "./Filter";
import Header from "./Header";

function FlashCardPage({flashCards, handleSetFlashCards}) {
    const [filter, setFilter] = useState("All")

    function handleTopicChange(value) {
        setFilter(value)
    }


    function handleAddCard(newCard) {
        handleSetFlashCards([newCard, ...flashCards])
    }

    function handleDelete(deleteCard) {
        const newList = flashCards.filter(card => card.id !== Number(deleteCard.id))
        handleSetFlashCards(newList)
    }


    return (
        <div>
            <Header />
            <NewFlashCardForm onAddCard={handleAddCard}/>
            <Filter topic={filter} onTopicChange={handleTopicChange} />
            <FlashCardList topic={filter} flashCards={flashCards} onHandleDelete={handleDelete} />
        </div>
    )
}

export default FlashCardPage
