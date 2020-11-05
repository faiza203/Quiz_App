import React, { useState } from 'react';
import { QuestionState, Difficulty , AnswerObject , QuestionCard} from "./components/index";
import { fetchQuizQuestions } from "./API";
import './App.css';

function App() {
  const total_Questions = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(fetchQuizQuestions(total_Questions, Difficulty.EASY));
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      total_Questions,
      Difficulty.EASY
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnwer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = () => {};
  console.log(questions[number]);
    
  return (
    <div className="App">
      <h1>I am react</h1>
      {gameOver || userAnswers.length === total_Questions ? (<button className="start" onClick={startTrivia}>
        Start
      </button>
      ) : null
      }
      {!gameOver ? <p className="score">score</p> : null}
      {loading && <p>Loading Questions...</p>}
    {!loading && !gameOver && (
      <QuestionCard 
      questionNr={number + 1} totalQuestions={total_Questions}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnwer}
      />
    )}

      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
