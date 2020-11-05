import {Question} from "./index"
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
export type QuestionState = Question & { answers: string[] }
