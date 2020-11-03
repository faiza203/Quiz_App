import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import {fetchQuizQuestions ,QuestionState  , Difficulty} from './API'
import './App.css';
import { async } from 'q';

function App() {
  const total_Questions = 10;
  const [loading , setLoading] = useState(false);
  const [questions , setQuestion] = useState<QuestionState[]>([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);
  console.log(fetchQuizQuestions(total_Questions , Difficulty.EASY));
  
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
      {/* <QuestionCard 
      questionNr={number + 1} totalQuestions={total_Questions}
      question={questions[number].question}
      answers={questions[number].answer}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnwer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
