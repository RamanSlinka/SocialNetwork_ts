import React from "react";
import style from './Dialogs.module.scss';
import styleCommon from '../Common/SCSS/input.module.scss'
 import styleBtn from '../Common/SCSS/button.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(message =>
        <Message message={message}/>)


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.textareaWrapper}>
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
                    className={styleCommon.textarea}
                    component={Textarea}
                    validate={[required, maxLength]}
                    name='newMessageBody' placeholder={'Enter your message'}/>
            </div>
            <div>
                <button className={styleBtn.button}> Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux =
    reduxForm<FormType>({
        form: 'dialogAddMessageForm'
    })(AddMessageForm)

export default Dialogs;