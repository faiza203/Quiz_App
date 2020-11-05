import { shuffleArray } from "./utils"
import {Question} from "./components/QuestionType"
import {Difficulty } from "./components/DifficultyType"

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        const data = await (await fetch(endpoint)).json();
        return data.results.map((question: Question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
}