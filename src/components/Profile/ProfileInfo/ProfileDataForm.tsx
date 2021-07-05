import React from "react";
import {CreateField, Input, Textarea} from '../../Common/FormsControls/FormsControls'
import {InjectedFormProps, reduxForm} from "redux-form";

export type FormDateType = {
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    AboutMe: string
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDateType>> = ({ handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
                 <div><button>save</button></div>
                <div>
                    <b>Full name</b>: {CreateField('Full name', 'fullName',
                    [], Input)}
                </div>

                <div>
                    <b>Looking for a job</b>: {CreateField('', 'lookingForAJob',
                        [], Input, {type: 'checkbox'})}
                </div>

                <div>
                    <b>My professional skills</b>:
                    {CreateField('My professional skills', 'lookingForAJobDescription',
                        [], Textarea)}
                </div>

                <div>
                    <b>About me</b>:
                    {CreateField('About me', 'AboutMe',
                        [], Textarea)}
                </div>
                <div>
                {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
                {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                {/*})}*/}
                </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;