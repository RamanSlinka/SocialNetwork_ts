import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator,  updateNewPostTextActionCreator} from "./ProfileReduser";
import dialogsReducer, {sendMessageCreator,
    updateNewMessageBodyCreator} from "./DialogsReduser";



export type ActionTypes =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

 type PostsType = {
    id: number
    message: string
    likesCount: number
}
 type DialogType = {
    id: number
    name: string
}
 type MessageType = {
    id: number
    message: string
}
 type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type SidebarType = {}
 type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}




export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store: StoreType = createStore(rootReducer);
export default store;