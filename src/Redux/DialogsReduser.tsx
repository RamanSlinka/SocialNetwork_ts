import {ActionTypes, DialogPageType, RootStateType} from "./state";


export const updateNewMessageBodyCreator = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text } as const)

export const sendMessageCreator = () => ({
    type: 'SEND-MESSAGE' } as const)

const dialogsReducer = (state: DialogPageType, action: ActionTypes): DialogPageType => {
    if ( action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body

    } else if (action.type === 'SEND-MESSAGE') {
        let body = state.newMessageBody
        state.newMessageBody = '';
        state.messages.push({id: 4, message: body});

    }

    return state
}

export default  dialogsReducer