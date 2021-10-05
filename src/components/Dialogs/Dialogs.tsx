import React from "react";
import h from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";




const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(message =>
        <Message message={message}/>)


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={h.dialogs}>
            <div className={h.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={h.messages}>
                {messagesElements}
            </div>
            <div className={h.textareaWrapper}>
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
                <Field
                    className={h.textarea}
                    component={Textarea}
                       validate={[required, maxLength]}
                       name='newMessageBody' placeholder={'Enter your message'}/>
            </div>
            <div>
                <button className={h.btn}> Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux =
    reduxForm<FormType>({
        form: 'dialogAddMessageForm'
    })(AddMessageForm)

export default Dialogs;