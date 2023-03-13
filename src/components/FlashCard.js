import React from "react";

function FlashCard({ question, answer, topic, id, onHandleDelete }) {

    function handleDeleteClick(e){
        fetch(`http://localhost:3000/flashcards/${id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then((card) => console.log(card))
        onHandleDelete(e.target.parentNode.parentNode)
    }

    return (
        <article id={id} className="flashcardList">
            <h3>{question}</h3>
            <h4>{answer}</h4>
            <p>{topic}</p>
            <span>
                <button onClick={handleDeleteClick}>x</button>
            </span>
        </article>
    )
}

export default FlashCard
