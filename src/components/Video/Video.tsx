import React from 'react';
import  n  from './Video.module.css'
export default function Video() {
    return (
        <div className={n.wrapper} >

            <iframe
                    src="https://www.youtube.com/embed/0mVbNp1ol_w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </div>
    );
}