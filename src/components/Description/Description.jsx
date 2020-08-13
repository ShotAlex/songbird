import React from 'react';
import './Description.scss';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Description = ({ descr }) => {
    return (
        <div className="description">
            {!descr
                ? <div className="description-start">Послушайте плеер. <br />и выберите название птицы, чей голос прозвучал</div>
                : <>
                    <div className="description-main">
                        <div className="description__img">
                            <img src={descr.image} alt={descr.name}/>
                        </div>
                        <div className="description-bird">
                            <h3 className="description-bird__name">
                                {descr.name}
                            </h3>
                            <h4 className="description-bird__species">
                                {descr.species}
                            </h4>
                            <div className="description-bird__player">

                                <AudioPlayer
                                    autoPlay={false}
                                    autoPlayAfterSrcChange={false}
                                    src={descr.audio}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="description__text">
                        {descr.description}
                    </div>
                </>

            }
        </div>
    );
};

export default Description;