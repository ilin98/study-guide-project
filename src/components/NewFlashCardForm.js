import React, { useState } from "react";

function NewFlashCardForm({onAddCard}) {
    const [newCard, setNewCard] = useState({
        answer: "",
        question: "",
        topic: "Javascript",
      })

    function handleChange(e) {
        setNewCard({
            ...newCard,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch ('http://localhost:3000/flashcards', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCard)
        })
        .then(resp => resp.json())
        .then(newCard => {
            onAddCard(newCard)
            setNewCard({
                answer: "",
                question: "",
                topic: "Javascript",
            })
        })
    }

    return (
        <div className="new-card-form">
            <h2>New Card</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Question:
                    <textarea name="question" value={newCard.question} placeholder="Question" onChange={handleChange}/>
                </label>
                <label>
                    Answer:
                    <textarea name="answer" value={newCard.answer} placeholder="Answer" onChange={handleChange}/>
                </label>
                <label>
                    Topic:
                    <select
                        name="topic"
                        value={newCard.topic}
                        onChange={handleChange}
                    >
                        <option value="Javascript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                    </select>
                </label>
                <button type="submit">Add Card</button>
            </form>
      </div>
    )
}

export default NewFlashCardForm
