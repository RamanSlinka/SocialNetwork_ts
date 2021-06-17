/*type updateNewMessageBodyACType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}*/
type sendMessageACType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}
export type ActionTypeDialogReducer =  sendMessageACType

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type dialogPageType = typeof initialState

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
    ] as Array<MessageType>
}

const dialogsReducer = (state: dialogPageType = initialState,
                        action: ActionTypeDialogReducer): dialogPageType => {

    switch (action.type) {
       /* case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.body
            };*/
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

/*export const updateNewMessageBodyCreator = (text: string): updateNewMessageBodyACType => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text
} as const)*/

export const sendMessageCreator = (newMessageBody: string): sendMessageACType => ({
    type: 'SEND-MESSAGE', newMessageBody
} as const)

export default dialogsReducer;