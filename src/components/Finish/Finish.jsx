import React from 'react';
import './Finish.scss';
import winImg from '../../assets/images/when-win.gif';


const Finish = ({ score, totalScore }) => {
    return (
        <div className="finish">
            <h3 className="finish__name">
                Поздравляем!
            </h3>
            <div className="finish-score">
                {score === totalScore
                    ? <p>
                        <img src={winImg} alt="you win. Duck dance"/>
                        <div>
                        ТЫ действительно <span> ЛУЧШИЙ </span>, так держать! <br />  
                        <sub>Набрано максимальное количество баллов</sub>
                        </div>
                    </p>
                    : <p>
                        Вы набрали  <span>{score}</span> очков из {totalScore}
                    </p>
                }
            </div>
        </div>
    );
};

export default Finish;