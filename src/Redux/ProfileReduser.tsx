import {ActionTypes, PostsType, ProfilePageType } from "./state";



export const addPostActionCreator = () => ({
    type: 'ADD-POST' } as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text } as const)


const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {

    if (action.type === 'ADD-POST') {
        let newPost: PostsType = {
            id: 6,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = ' ';

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText

    }


    return state
}

export default  profileReducer