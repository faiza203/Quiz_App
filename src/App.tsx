import React, { useState } from 'react';
import { QuestionCard } from "./components/QuestionCard"
import './App.css';
import { async } from 'q';

function App() {
  const [loading , setLoading] = useState(false);
  const [question , setQuestion] = useState([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);
  
  const startTrivia = async () => { };
  const checkAnwer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>I am react</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
