import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Question from './Question/Question';
import NextLevel from './NextLevel/NextLevel';
import Answers from './Answers/Answers';
import Description from './Description/Description';
import Finish from './Finish/Finish';
// data
import dataBird from '../data/birds';
import levelList from '../data/levels';
// Sounds
import useSound from 'use-sound';
import correctSound from '../assets/sound/correct.mp3';
import unCorrectSound from '../assets/sound/uncorrect.mp3';
import nextSound from '../assets/sound/next.mp3';
import finishSound from '../assets/sound/finish.mp3';

let counterScore = +dataBird[0].length - 1;
const totalScore = +dataBird.length * counterScore;
let checkedAnswersArr = []; 
const randomAnswer = (max) => +Math.floor(Math.random() * max + 1);

function App() {
    const [score, setScore] = useState(0);
    const [whatLevel, setWhatLevel] = useState(0);
    const [activeBtnNextLevel, setActiveBtnNextLevel] = useState(false);
    const [trueAnswer, setTrueAnswer] = useState(randomAnswer(counterScore));
    const [finished, setFinished] = useState(+dataBird.length);
    const [description, setDescription] = useState(false)
    const [guessed, setGuessed] = useState(false)
    // SOUND after click
    const [playCorrectAnswer] = useSound(correctSound);
    const [playUnCorrectAnswer] = useSound(unCorrectSound);
    const [playNextBtn] = useSound(nextSound);
    const [playFinish] = useSound(finishSound);
    
    const birdList = dataBird[whatLevel];
    let dataForQuestion;
    if (finished) dataForQuestion = dataBird[whatLevel][trueAnswer - 1];

    
    useEffect(() => {
        if (whatLevel <= levelList.length) console.log(`Правильный ответ №${trueAnswer}`);
    }, [trueAnswer]);
    
    // TRY GOT TRUE ANSWER -- RED or GREEN
    const tryingToGuess = (id) => {
        if (!checkedAnswersArr.includes(id)) checkedAnswersArr.push(id);
        let descrBird = dataBird[whatLevel][id - 1];
        setDescription(descrBird);
        if (id === trueAnswer) {
            playCorrectAnswer();
            setActiveBtnNextLevel(true);
            setGuessed(true);
            if (!activeBtnNextLevel) setScore((i) => i + counterScore);
        } else {
            playUnCorrectAnswer();
            if (counterScore) {
                --counterScore;
            }
        }
    }

    //  BUTTON
    const nextLevel = (e) => {
        setWhatLevel((i) => ++i);
        setActiveBtnNextLevel(false);
        setFinished((i) => --i);
        setDescription(false);
        setGuessed(false);
        setTrueAnswer(randomAnswer(+dataBird[whatLevel].length))
        if (finished - 1) {
            playNextBtn();
        } else { playFinish() }
        counterScore = 5;
        checkedAnswersArr = [];
    }
    const tryAgain = () => {
        setFinished(6);
        setWhatLevel(0);
        setScore(0);
        playNextBtn();
        checkedAnswersArr = [];
    }

    return (
        <div className="app">
            <Header
                levels={levelList}
                whatLevel={whatLevel}
                score={score} />

            {finished
                ? <>
                    <Question
                        guessed={guessed}
                        answer={dataForQuestion} />
                    <NextLevel
                        nextLevel={() => nextLevel()}
                        activeBtnNextLevel={activeBtnNextLevel}
                        value={'Следующий уровень'} />
                    <div className="answers-description">
                        <Answers
                            answers={birdList}
                            trueAnswer={trueAnswer}
                            arr={checkedAnswersArr}
                            tryingToGuess={tryingToGuess} />
                        <Description
                            descr={description} />
                    </div>
                    
                </>
                : <>
                    <Finish
                        score={score}
                        totalScore={totalScore} />
                    <NextLevel
                        nextLevel={tryAgain}
                        activeBtnNextLevel={!activeBtnNextLevel}
                        value={'Начать сначала'} />
                </>
            }
        </div>
    );
}

export default App;