

type addPostACType ={
    type: 'ADD-POST'
}
type updateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type ActionType = addPostACType | updateNewPostTextACType

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

const profileReducer = (state: initialStateType
                            = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = ():addPostACType  => ({
    type: 'ADD-POST'
} as const)

export const updateNewPostTextActionCreator = (text: string):updateNewPostTextACType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
export default profileReducer;