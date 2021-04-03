import profileReducer, {addPostActionCreator,
    updateNewPostTextActionCreator} from "./ProfileReduser";
import dialogsReducer, {sendMessageCreator,
    updateNewMessageBodyCreator} from "./DialogsReduser";

 type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    /* updateNewPostText: (newText: string) => void
     addPost: (message: string) => void*/
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

 type ActionTypes =
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>


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
/*

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you ?', likesCount: 12},
                {id: 2, message: "It's my firs post", likesCount: 11}
            ],
            newPostText: 'random text'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Roman'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Sofia'},
                {id: 4, name: 'Robert'},
                {id: 5, name: 'Romych'}
            ],
            messages: [
                {id: 1, message: 'hi !'},
                {id: 2, message: 'how are you ?'},
                {id: 3, message: 'WTF?'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state')
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber();


      /!*  if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogPage.newMessageBody = action.body
            this._callSubscriber();
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 4, message: body});
            this._callSubscriber();
        }
   *!/ }

    /!* addPost(message: string) {
         let newPost: PostsType = {
             id: 6,
             message: this._state.profilePage.newPostText,
             likesCount: 0
         }
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = ' ';
         this._callSubscriber();
     },

     updateNewPostText(newText: string) {
         this._state.profilePage.newPostText = newText
         this._callSubscriber();
     },*!/


}

/!*
export const addPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)

export const updateNewMessageBodyCreator = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text
} as const)

export const sendMessageCreator = () => ({
    type: 'SEND-MESSAGE'
} as const)*!/

export default store;*/
