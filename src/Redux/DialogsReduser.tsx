import {ActionTypes, DialogPageType} from "./redux-store";


export const updateNewMessageBodyCreator = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text } as const)

export const sendMessageCreator = () => ({
    type: 'SEND-MESSAGE' } as const)



let  initialState = {
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
}


const dialogsReducer = (state: DialogPageType = initialState,
                        action: ActionTypes): DialogPageType => {
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