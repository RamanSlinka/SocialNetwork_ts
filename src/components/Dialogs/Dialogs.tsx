import React, {ChangeEvent} from "react";
import h from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionTypes,
    DialogType,
    MessageType} from "../../Redux/state";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/DialogsReduser";


type DialogsPropsType = {

    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

export default function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <Message message={message}/>)
    let newMessageBody = props.newMessageBody;

   /* let newMessage = React.createRef<HTMLTextAreaElement>()*/

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body =  e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))

    }


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
                    onChange={onNewMessageChange}
                    /*ref={newMessage}*/></textarea>
                <button
                    onClick={onSendMessageClick}
                >Send
                </button>
            </div>
        </div>
    );
}