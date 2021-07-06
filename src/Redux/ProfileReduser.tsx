import {profileAPI, usersAPI} from "../Api/api";

import { AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


type addPostACType = {
    type: 'ADD-POST'
    newPostText: string
}
type updateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type setUserProfileACType = {
    type: 'SET-USER-PROFILE'
    profile: any
}
type setStatusACType = {
    type: 'SET-STATUS'
    status: string
}

type deletePostACType = {
    type: 'DELETE_POST'
    postId: number
}
type savePhotoACType = {
    type:  'SAVE_PHOTO_SUCCESS'
    photos: string
}

export type ActionTypeProfileReducer = addPostACType |
    updateNewPostTextACType |
    setUserProfileACType |
    setStatusACType | deletePostACType | savePhotoACType

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type initialStateType = {
    posts: Array<PostsType>
    profile: any
    status: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you ?', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 11}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: initialStateType
                            = initialState, action: ActionTypeProfileReducer): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }

        case "SET-USER-PROFILE" : {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS" : {
            return {...state, status: action.status}
        }
        case "DELETE_POST" : {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case "SAVE_PHOTO_SUCCESS" : {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string): addPostACType => ({
    type: 'ADD-POST', newPostText
} as const)


export const setUserProfile = (profile: any): setUserProfileACType => ({
    type: 'SET-USER-PROFILE',
    profile: profile
} as const)
export const setStatus = (status: string): setStatusACType => ({
    type: 'SET-STATUS',
    status: status
} as const)

export const deletePost = (postId: number): deletePostACType => ({
    type: 'DELETE_POST', postId
} as const)

export const savePhotoSuccess = (photos: string): savePhotoACType => ({
    type: 'SAVE_PHOTO_SUCCESS', photos
} as const)



//Thunk
export const getUserProfile = (userId: number ): AppThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: any): AppThunkType => async (dispatch, getState) => {
const userId =  getState().auth.userId;
       let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.message[0]}))
        return Promise.reject( response.data.message[0]);
    }
}

export default profileReducer;