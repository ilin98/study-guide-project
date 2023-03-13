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
            <p className="topic">{topic}</p>
            <h3>{question}</h3>
            <p className='answer'>{answer}</p>
            <button className='delete' onClick={handleDeleteClick}>🗑</button>
        </article>
    )
}

export default FlashCard
