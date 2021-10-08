import React from 'react';
import style from './Video.module.css'

export default function Video() {
    return (
        <div className={style.wrapper}>

            <iframe className={style.video}
                    src="https://www.youtube.com/embed/0mVbNp1ol_w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media;
                     gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>

            <iframe
                className={style.video}
                src="https://www.youtube.com/embed/gb7gMluAeao"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay;
                     clipboard-write; encrypted-media;
                      gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

            <iframe className={style.video}
                    src="https://www.youtube.com/embed/xP3cxbDUtrc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay;
                     clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>

        </div>
    );
}