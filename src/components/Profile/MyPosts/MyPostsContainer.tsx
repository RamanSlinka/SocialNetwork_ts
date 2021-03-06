import React from 'react';

import {addPostActionCreator} from "../../../Redux/ProfileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {dialogPageType} from "../../../Redux/DialogsReduser";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
/*
type PropsType = {
    store: StoreType

 posts: Array<PostsType>
 dispatch: (action: ActionTypes) => void
 newPostText: string
updateNewPostText: (message: string) => void
addPost: (message: string) => void*/
/*export default function MyPostsContainer(/!*props: PropsType*!/) {


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
}*/

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type mapStateToPropsType = {
    posts: Array<PostsType>
   /* newPostText: string*/
}

type mapDispatchToPropsType = {
   /* updateNewPostText: (text: string) => void*/
    addPost: (newPostText: string) => void
}
export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
       /* newPostText: state.profilePage.newPostText*/
    }
}

const mapDispatchToProps = (dispatch: Dispatch ): mapDispatchToPropsType => {
    return {
       /* updateNewPostText: (text: string) => {
            dispatch((text))
        },*/
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;