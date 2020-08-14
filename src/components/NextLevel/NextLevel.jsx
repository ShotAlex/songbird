import React from 'react';
import './NextLevel.scss';

const NextLevel = ({ nextLevel, activeBtnNextLevel, value }) => {
    let button;

    if (activeBtnNextLevel) {
        button = <button onClick={nextLevel} className="active">{value}</button>
    } else {
        button = <button>{value}</button>
    }

    return (
        <div className="next-level">
            {button}
        </div>
    );
};

export default NextLevel;