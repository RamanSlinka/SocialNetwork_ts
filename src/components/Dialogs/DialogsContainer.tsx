import React from "react";

import {
    StoreType
} from "../../Redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


/*type DialogsPropsType = {
    store: StoreType*/

    /*dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void*/
}

export default function DialogsContainer(/*props: DialogsPropsType*/) {



    /*  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
      let messagesElements = props.messages.map(message => <Message message={message}/>)
      let newMessageBody = props.newMessageBody;*/

    /* let newMessage = React.createRef<HTMLTextAreaElement>()*/




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
}