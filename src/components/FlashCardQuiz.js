import React, { useState } from "react";

function FlashCardQuiz({flashCards}) {
    let randomCard = flashCards[Math.floor(Math.random()*flashCards.length)]
    const [currentCard, setCurrentCard] = useState(randomCard)
    const [front, setFront] = useState(true)
    const [quizBank, setQuizBank] = useState(flashCards)

    function handleClick() {
        setFront(!front)
    }

    function handleNextClick(e){
        if (quizBank.length > 1) {
            setQuizBank(quizBank.filter(card => card.id !== Number(e.target.id)))
            setCurrentCard(quizBank[Math.floor(Math.random()*quizBank.length)])
            setFront(true)
        } else {
            setQuizBank('done')
        }
    }

    function handleAgainClick(){
        setQuizBank(flashCards)
        setFront(true)
    }

    return (
        <>
            {quizBank === 'done' ?
            <div>
                <h1>Completed!</h1>
                <button onClick={handleAgainClick}>Quiz again</button>
            </div> :
            <div>
                <h4 className="cardTopic">{currentCard.topic}</h4>
                <article className="flashcard" onClick={handleClick}>
                    {front ? <section className="front">{currentCard.question}</section> : <section className="back">{currentCard.answer}</section>}
                </article>
                    <button id={currentCard.id} onClick={handleNextClick}>→</button>
            </div>}
        </>
    )
}

export default FlashCardQuiz
