import {ActionTypes} from "./redux-store";


export const addPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type initialStateType = {
    posts: Array<PostsType>
    newPostText: string
}
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you ?', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 11}
    ],
    newPostText: 'random text'
}

const profileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

    if (action.type === 'ADD-POST') {
        let newPost: PostsType = {
            id: 6,
            message: state.newPostText,
            likesCount: 0
        }
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText
        return stateCopy
    }


    return state
}

export default profileReducer