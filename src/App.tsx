import React, { useState } from 'react';
import { QuestionState, Difficulty, AnswerObject, QuestionCard, LoadingDiv } from "./components/index";
import { fetchQuizQuestions } from "./API";
import './App.css';

function App() {
  const total_Questions = 11;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
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
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correct_answer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObj])
    }
  }
  const next_Question = () => {
    const nextQuestion = number + 1;
    console.log(nextQuestion, total_Questions);
    if (nextQuestion + 1 === total_Questions) {
      console.log(nextQuestion, total_Questions);
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === total_Questions ? (
        <button className="start btn btn-primary" onClick={startTrivia}>
          Start
        </button>
      ) : null
      }
      {!gameOver ? <p className="score">score : {score}</p> : null}
      {loading && < LoadingDiv />}
      {!gameOver && !loading && (
        <QuestionCard
          questionNr={number + 1} totalQuestions={total_Questions - 1}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnwer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1
        && number !== total_Questions - 1 ?
        (<button className="next btn btn-success" onClick={next_Question}>
          Next
        </button>)
        : null}
    </div>
  );
}

export default App;
