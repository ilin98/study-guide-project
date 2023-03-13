import React from "react";
import FlashCardList from "./FlashCardList";
import NewFlashCardForm from "./NewFlashCardForm";

function FlashCardPage({flashCards, handleSetFlashCards}) {


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
            <FlashCardList flashCards={flashCards} onHandleDelete={handleDelete} />
        </div>
    )
}

export default FlashCardPage
