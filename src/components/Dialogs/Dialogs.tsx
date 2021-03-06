import React, {ChangeEvent} from "react";
import h from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";



/*
type DialogsPropsType = {
    sendMessage: () => void
    dialogsPage: DialogPageType
    updateNewMessageBody: (message: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void*/


const Dialogs:React.FC<DialogsPropsType> = (props) => {

    /* let state = props.dialogsPage*/

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message}/>)
    // let newMessageBody = props.dialogsPage.newMessageBody;

    /* let newMessage = React.createRef<HTMLTextAreaElement>()*/
    /* let onSendMessageClick = () => {
         props.sendMessage()
     }*/
    /*let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
        /!*props.dispatch(updateNewMessageBodyCreator(body))*!/
    }*/

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    /*  if (!props.isAuth ) return <Redirect to={'./login'}/>*/

    return (
        <div className={h.dialogs}>
            <div className={h.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={h.messages}>
                {messagesElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

type FormType = {
    newMessageBody: string
}
const maxLength = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<FormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength]}
                       name='newMessageBody' placeholder={'enter your message'}/>
            </div>
            <div>
                <button> Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux =
    reduxForm<FormType>({
        form: 'dialogAddMessageForm'
    })(AddMessageForm)

export default Dialogs;