import React, { useEffect, useRef, useState } from 'react';

import Header from '../../../components/Header/Header';
import Button from '../../../components/PopoverAction/PopoverAction';
import PopoverBtn from '../../../components/PopoverBtn/PopoverBtn';
import musicRain from '../../../assets/Music/raincity.mp3';
import musicKeyboard from '../../../assets/Music/keyboard.mp3';

import './BackgroundList.scss';

BackgroundVideo.propTypes = {};

function BackgroundVideo({ videoList }) {
    const [day, setDay] = useState(true);
    const [rain, setRain] = useState(false);
    const [inOut, setInOut] = useState(false);

    const [volume, setVolume] = useState(20);
    const handleVolume = (data) => {
        setVolume(data);
        rainRef.current.volume = volume / 100;
    };

    const rainRef = useRef();

    const handleVideo = () => {
        setDay(!day);
    };

    const handleRain = () => {
        setRain(!rain);
        !rain ? rainRef.current.play() : rainRef.current.pause();
        rainRef.current.volume = volume / 100;
    };

    const handleInOut = () => {
        setInOut(!inOut);
    };

    console.log(`day:${day}, rain:${rain}, inOut:${inOut}`);

    return (
        <div>
            <Header handleVideo={handleVideo}></Header>
            <div className="background">
                <div className="city-rain">
                    <Button
                        handleVolume={handleVolume}
                        handlePopover={handleRain}
                        isOn={!rain}
                        btnName="City Rain"
                    />

                    <audio loop ref={rainRef} src={musicRain}></audio>
                </div>

                <div className="enter">
                    <PopoverBtn
                        handleInOut={handleVideo}
                        handlePopover={handleInOut}
                        isOn={inOut}
                        btnName="Enter"
                    />
                </div>

                <div className="keyboard">
                    <Button btnName="keyboard" />
                </div>

                <div className="background-video">
                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === true && rain === false && inOut === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[0].name}
                            type="video/mp4"
                            src={videoList[0].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === true && rain === true && inOut === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[2].name}
                            type="video/mp4"
                            src={videoList[2].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === false && rain === false && inOut === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[1].name}
                            type="video/mp4"
                            src={videoList[1].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            rain === true && day === false && inOut === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[3].name}
                            type="video/mp4"
                            src={videoList[3].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === false && inOut === true && rain === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[4].name}
                            type="video/mp4"
                            src={videoList[4].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === false && inOut === true && rain === true
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[6].name}
                            type="video/mp4"
                            src={videoList[6].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === true && inOut === true && rain === false
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[5].name}
                            type="video/mp4"
                            src={videoList[5].url}
                        />
                    </video>

                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        style={
                            day === true && inOut === true && rain === true
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <source
                            className={videoList[7].name}
                            type="video/mp4"
                            src={videoList[7].url}
                        />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default BackgroundVideo;
