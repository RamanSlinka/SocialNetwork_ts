import React from 'react';
import {addPostActionCreator} from "../../../Redux/ProfileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";


type PostsType = {
    id: number
    message: string
    likesCount: number
}
type mapStateToPropsType = {
    posts: Array<PostsType>
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch ): mapDispatchToPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;