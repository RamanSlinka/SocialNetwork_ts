import {profileAPI, usersAPI} from "../Api/api";
import {Dispatch} from "redux";


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
type ActionType = addPostACType |
    updateNewPostTextACType |
    setUserProfileACType |
    setStatusACType

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
                            = initialState, action: ActionType): initialStateType => {
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

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {


    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer;