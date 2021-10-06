import React from "react";
import { MessageType } from "../../../Redux/DialogsReduser";
import h from '../Dialogs.module.scss'

type MessagePropsType = {
    message: MessageType
}

export default function Message(props: MessagePropsType) {
    return (
        <div className={h.message}>
            {props.message.message}
        </div>
    );
}




