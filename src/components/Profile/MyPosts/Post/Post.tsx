import React from 'react';
import style from './Post.module.scss'

type PostMessage = {
    message: string,
    likesCount: number
    id: number
}

export default function Post(props: PostMessage) {
    return (
        <div>
            <div className={style.item}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
                className={style.img}/>
                {props.message}
                <div className={style.like}>
                    <span >like </span>{props.likesCount}
                </div>
            </div>

        </div>
    );
};