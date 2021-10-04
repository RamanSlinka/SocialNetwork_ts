import React from 'react';
import p from './Post.module.css'

type PostMessage = {
    message: string,
    likesCount: number
    id: number
}

export default function Post(props: PostMessage) {
    return (
        <div>
            <div className={p.item}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
                className={p.img}/>
                {props.message}
                <div className={p.like}>
                    <span >like </span>{props.likesCount}
                </div>
            </div>

        </div>
    );
};