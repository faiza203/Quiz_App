import React from 'react';
import {Quiz} from "./Quiz"
import './App.css';

function App() {
  Quiz();
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
