import { DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
import { type } from "os";
import React from "react";
import {Props} from "./index"
export const QuestionCard: React.FC<Props> = (
    { question, answers, callback, 
        userAnswer, questionNr, totalQuestions}
    ) => {
    return (
        <div>
            <p className="numbers">
                Questions : {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
