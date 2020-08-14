import React from 'react';
import './Answers.scss';


const Answers = ({ answers, trueAnswer, tryingToGuess, arr }) => {

    const answersList = answers.map((item) =>
        <li
            key={item.id}
            data-success={trueAnswer === item.id ? "success" : "failure"}
            className={arr.includes(item.id) ? "checked" : null}
            onClick={() => tryingToGuess(item.id)} >
            <span></span> {item.name}
        </li>
    );

    return (
        <div className="answers">
            <ul>
                {answersList}
            </ul>
        </div>
    );
};

export default Answers;