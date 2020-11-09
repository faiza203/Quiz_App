import React from "react";
import { Props } from "./index";
export const QuestionCard: React.FC<Props> = (
    { question, answers, callback,
        userAnswer, questionNr, totalQuestions }
) => {
    return (
        <div id="questionCard">
            <p className="numbers">
                Questions : {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map((answer) => (
                    <div
                        key={answer}
                    >
                        <button className="btn btn-lg btn-block option" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
