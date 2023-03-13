import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import '../App.css';
import FlashCardPage from "./FlashCardPage";
import FlashCardQuiz from "./FlashCardQuiz";
import NavBar from "./NavBar";

function App() {
  // const [quizMode, setQuizMode] = useState(false)
  const [flashCards, setFlashCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/flashcards')
    .then(resp => resp.json())
    .then(cards => {
        setFlashCards(cards)
    })
}, [setFlashCards])

  // function handleClick(){
  //   setQuizMode(!quizMode)
  // }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/quiz">
          <FlashCardQuiz flashCards={flashCards}/>
        </Route>
        <Route exact path="/">
          <FlashCardPage flashCards={flashCards} handleSetFlashCards={setFlashCards} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
