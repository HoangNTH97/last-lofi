import React, { useRef, useState } from 'react';
import nexticon from '../../assets/Media/next.9551d6f2d952cb6759a725aac878ab09.svg';
import pauseIcon from '../../assets/Media/pause.4ac709263a083f4039b11e120950f9d3.svg';
import playIcon from '../../assets/Media/play.18d46dd90ca12db32170bea8b2d46404.svg';
import prevIcon from '../../assets/Media/previous.3b3474665d6b8d95bb081b41d67270fe.svg';
import { audios } from '../../components/data/data';
import './MusicPlay.scss';

MusicPlay.propTypes = {};

function MusicPlay(props) {
    const audioRef = useRef();

    const [audioIndex, setAudioIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playPause, setPlayPause] = useState(false);

    const swapBtn = () => {
        setPlayPause(!playPause);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (playPause) audioRef.current.play();
    };

    const handlePausePlayClick = () => {
        if (playPause) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlayPause(!playPause);
    };

    return (
        <div>
            <div className="music">
                <div className="music-item">
                    <div className="music-prev">
                        <img src={prevIcon} alt="" />
                    </div>
                    <div className="music-play" onClick={handlePausePlayClick}>
                        <img onClick={swapBtn} src={!playPause ? playIcon : pauseIcon} alt="" />
                    </div>
                    <div className="music-next">
                        <img src={nexticon} alt="" />
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    src={audios[audioIndex].src}
                    onLoadedData={handleLoadedData}
                    onEnded={() => setPlayPause(false)}
                />
            </div>
        </div>
    );
}

export default MusicPlay;
