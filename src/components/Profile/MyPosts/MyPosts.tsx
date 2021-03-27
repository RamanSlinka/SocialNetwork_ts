import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionTypes,  PostsType} from "../../../Redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReduser";

type PropsType = {
    posts: Array<PostsType>
    /*dispatch: (action: ActionTypes) => void*/
    newPostText: string
    updateNewPostText: (message: string) => void
    addPost: () => void
}

export default function MyPosts(props: PropsType) {
    let postsElements =
        props.posts.map(post =>
            <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);
/*
    let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    let onAddPost = () => {
      props.addPost();
       /* props.dispatch(addPostActionCreator());*/
    }

    const onPostChange = (e:  ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        /*props.dispatch(updateNewPostTextActionCreator(text))*/
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    /*ref={newPostElement}*/
                    onChange={onPostChange}
                    value={props.newPostText}
                    placeholder='how are you:)'
                    className={s.text_area}/>
                <br/>
                <button
                    onClick={onAddPost}
                    className={s.btn}>Send
                </button>
            </div>
            {postsElements}
        </div>
    );
}