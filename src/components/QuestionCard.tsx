import { type } from "os";
import React from "react";
type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNr: number;
    totalQuestions: number;
};
export const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions
}) => {
    return (
        <div>
            <p className="numbers">
                Questions : {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} ></button>
                    </div>
                ))}
            </div>
        </div>
    )
}
