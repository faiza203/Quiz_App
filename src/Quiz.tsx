import {useState} from "react";
import {QuestionState , Difficulty} from "./components/DifficultyType";
import {fetchQuizQuestions} from "./API";
export const Quiz = () => {
    const total_Questions = 10;
    const [loading , setLoading] = useState(false);
    const [questions , setQuestion] = useState<QuestionState[]>([]);
    const [number , setNumber] = useState(0);
    const [userAnswers , setUserAnswers] = useState([]);
    const [score , setScore] = useState(0);
    const [gameOver , setGameOver] = useState(true);
    console.log(fetchQuizQuestions(total_Questions , Difficulty.EASY)); 
}