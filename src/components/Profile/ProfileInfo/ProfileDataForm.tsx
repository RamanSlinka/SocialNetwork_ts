import React, {FormEvent} from "react";
import {CreateField, Input, Textarea} from '../../Common/FormsControls/FormsControls'
import {InjectedFormProps, reduxForm} from "redux-form";
import p from "../Profile.module.css";
import s from "../../Common/FormsControls/FormsControls.module.css";
import {profileType} from "../../../Redux/ProfileReduser";

type ProfileDataForm = {
    handleSubmit:  (event: React.FormEvent<HTMLFormElement>) => void
    error: string
    profile: profileType
}
export type FormDateType = {
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    AboutMe: string
  }

//{handleSubmit, profile, error}
//  React.FC<InjectedFormProps<FormDateType>>
const ProfileDataForm = (props: any) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
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
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map((key: string) => {
                return <div key={key} className={p.contact}>
                    <b>{key}: {CreateField(key, 'contacts.' + key,
                        [], Input)}</b>
                </div>
            })}
            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;