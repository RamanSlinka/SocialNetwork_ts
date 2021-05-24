import React from "react";

import {
    DialogType,
    initialStateType, MessageType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/DialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";


/*type DialogsPropsType = {
    store: StoreType*/
    /*dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void*/
/*export default function DialogsContainer(/!*props: DialogsPropsType*!/) {



    /!*  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
      let messagesElements = props.messages.map(message => <Message message={message}/>)
      let newMessageBody = props.newMessageBody;*!/

    /!* let newMessage = React.createRef<HTMLTextAreaElement>()*!/




    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogPage
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))

            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}
            />;
        }
    }
    </StoreContext.Consumer>
}*/

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type mapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer