import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator,
    updateNewPostTextActionCreator} from "./ProfileReduser";
import dialogsReducer, {sendMessageCreator,
    updateNewMessageBodyCreator} from "./DialogsReduser";

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    /* updateNewPostText: (newText: string) => void
     addPost: (message: string) => void*/
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

let store: StoreType = createStore(reducers);

export default store;