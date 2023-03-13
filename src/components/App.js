import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import FlashCardPage from "./FlashCardPage";
import FlashCardQuiz from "./FlashCardQuiz";

function App() {
  const [quizMode, setQuizMode] = useState(false)
  const [flashCards, setFlashCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/flashcards')
    .then(resp => resp.json())
    .then(cards => {
        setFlashCards(cards)
    })
}, [setFlashCards])

  function handleClick(){
    setQuizMode(!quizMode)
  }

  return (
    <div className="App">
      {quizMode ?
      <button onClick={handleClick}>View all</button> :
      <button onClick={handleClick}>Start quizzing!</button> }
      {quizMode ? null : <Header />}
      {quizMode ? <FlashCardQuiz flashCards={flashCards}/> :
      <FlashCardPage flashCards={flashCards} handleSetFlashCards={setFlashCards} /> }
    </div>
  );
}

export default App;
