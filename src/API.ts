import { executionAsyncId } from "async_hooks"

export type Question ={
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answer : string[];
    question : string;
    type : string;
}
export type QuestionState = Question & {answer : string}
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficutlty=${difficulty}$type=multiple`;
    const data = await (await fetch(endPoint)).json();
    return data.results.map((question : Question) => ({
        ...question,
        answer: 
    }))    
}