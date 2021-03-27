import React from "react";
import { MessageType } from "../../../Redux/store";
import h from './../Dialogs.module.css'

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




