import React from 'react';
import {QuestionCard} from "./components/QuestionCard"
import './App.css';

function App() {
  const startTrivia = ( e : React.MouseEvent<HTMLButtonElement>) => {
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
