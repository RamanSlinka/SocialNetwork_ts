import {ActionTypes} from "./redux-store"

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type initialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Sofia'},
        {id: 4, name: 'Robert'}

    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'hi !'},
        {id: 2, message: 'how are you ?'},
        {id: 3, message: 'WTF?'}
    ] as Array<MessageType>,
    newMessageBody: '' as string
}

const dialogsReducer = (state: initialStateType = initialState,
                        action: ActionTypes): initialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.body
            };
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text
} as const)

export const sendMessageCreator = () => ({
    type: 'SEND-MESSAGE'
} as const)

export default dialogsReducer;