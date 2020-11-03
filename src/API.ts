import { shuffleArray } from "./utils"
import {Question} from "./components/QuestionType"
import {Difficulty , QuestionState} from "./components/DifficultyType"

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficutlty=${difficulty}$type=multiple`;
    const data = await (await fetch(endPoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
           question.incorrect_answers + " , " +
           question.correct_answer 
            ]),
    })
    )
}