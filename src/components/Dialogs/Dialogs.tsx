import React, {ChangeEvent} from "react";
import h from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";

/*
type DialogsPropsType = {
    sendMessage: () => void
    dialogsPage: DialogPageType
    updateNewMessageBody: (message: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void*/


export default function Dialogs(props: DialogsPropsType) {

   /* let state = props.dialogsPage*/

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

   /* let newMessage = React.createRef<HTMLTextAreaElement>()*/

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body =  e.currentTarget.value
        props.updateNewMessageBody(body)
        /*props.dispatch(updateNewMessageBodyCreator(body))*/
    }

    if (!props.isAuth ) return <Redirect to={'./login'}/>

    return (
        <div className={h.dialogs}>
            <div className={h.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={h.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}></textarea>
                <button
                    onClick={onSendMessageClick}
                >Send
                </button>
            </div>
        </div>
    );
}