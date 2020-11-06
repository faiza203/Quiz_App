import { DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
import { type } from "os";
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
                        <button className="btn btn-lg btn-block" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
