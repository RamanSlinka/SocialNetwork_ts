import React from 'react';
import MultiPlayer from "./MusicAudio";
import style from "./Music.module.scss"

const Music = () => {
    return (
        <div className={style.wrapper}>
            <div >
                <MultiPlayer
                    urls={[
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
                    ]}
                />


            </div>
        </div>
    );
};

export default Music;