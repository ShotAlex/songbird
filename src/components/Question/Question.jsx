import React, {useRef} from 'react';
import './Question.scss';
import birdImage from '../../assets/images/q-bird.jpg';
//---------
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const birdName = '******';

const Question = ({ guessed, answer }) => {
    const playerRef = useRef();
    if (guessed) playerRef.current.audio.current.pause();

    return (
        <div className="question">
            <div className="question__img">
                {guessed
                    ? <img src={answer.image} alt={answer.name} />
                    : <img src={birdImage} alt="just bird" />
                }
            </div>
            <div className="question-bird">
                <h3 className="question-bird__name">
                    {guessed
                        ? answer.name
                        : birdName
                    }
                </h3>
                <div className="question-bird__player">
                    <AudioPlayer
                        src={answer.audio}
                        autoPlay={true}
                        ref={playerRef}
                        />
                </div>
            </div>
        </div>
    );
};

export default Question;