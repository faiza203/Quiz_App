import {Question} from "./QuestionType"
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
export type QuestionState = Question & { answer: string }
