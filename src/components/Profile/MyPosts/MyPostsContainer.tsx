import React from 'react';

import {ActionTypes, PostsType, StoreType} from "../../../Redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

/*type PropsType = {
    store: StoreType*/

    /* posts: Array<PostsType>
     dispatch: (action: ActionTypes) => void
     newPostText: string*/
    /*updateNewPostText: (message: string) => void
    addPost: (message: string) => void*/
}

export default function MyPostsContainer(/*props: PropsType*/) {


    return (

        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                let addPost = () => {
                  store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text: string) => {
                   store.dispatch(updateNewPostTextActionCreator(text))
                }

           return     <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}