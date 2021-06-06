import React from "react";
import {dialogPagetype, sendMessageCreator} from "../../Redux/DialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";


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

/*export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
   /!* newMessageBody: string*!/
}*/
type mapStateToPropsType = {
    dialogsPage: dialogPagetype
   /* newMessageBody: string*/
}
type mapDispatchToPropsType = {
   /* updateNewMessageBody: (body: string) => void*/
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }/*
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }*/
    }
}

export default    compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


