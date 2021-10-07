import React, {FormEvent} from "react";
import {CreateField, Input, Textarea} from '../../Common/FormsControls/FormsControls'
import {InjectedFormProps, reduxForm} from "redux-form";
import styleCommon from '../../Common/SCSS/button.module.scss'
import p from "../Profile.module.scss";
import style from "../../Common/FormsControls/FormsControls.module.scss";
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
            <div className={style.titlesForm}>
                <button className={styleCommon.button}>save</button>
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div className={style.titlesForm}>
                <p>Full name</p>: {CreateField('Full name', 'fullName',
                [], Input)}
            </div>

            <div className={style.titlesForm}>
                <p>Looking for a job</p>: {CreateField('', 'lookingForAJob',
                [], Input, {type: 'checkbox'})}
            </div>

            <div className={style.titlesForm}>
                <p>My professional skills</p>:
                {CreateField('My professional skills', 'lookingForAJobDescription',
                    [], Textarea)}
            </div>

            <div className={style.titlesForm}>
                <p>About me</p>:
                {CreateField('About me', 'AboutMe',
                    [], Textarea)}
            </div>
            <div >
                <p>Contacts</p>: {Object.keys(props.profile.contacts).map((key: string) => {
                return <div key={key} className={p.contact}>
                    <p>{key}: {CreateField(key, 'contacts.' + key,
                        [], Input)}</p>
                </div>
            })}
            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;