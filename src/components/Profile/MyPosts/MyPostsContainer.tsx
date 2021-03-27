import React from 'react';

import {ActionTypes, PostsType, StoreType} from "../../../Redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReduser";
import MyPosts from "./MyPosts";

type PropsType = {
    store: StoreType
   /* posts: Array<PostsType>
    dispatch: (action: ActionTypes) => void
    newPostText: string*/
    /*updateNewPostText: (message: string) => void
    addPost: (message: string) => void*/
}

export default function MyPostsContainer(props: PropsType) {

    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
     <div>
         <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
     </div>
    );
}