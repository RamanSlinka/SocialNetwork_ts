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
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'
                    className={p.img}/>
                {props.message}
                <div>
                    <span>like </span>{props.likesCount}
                </div>
            </div>

        </div>
    );
};