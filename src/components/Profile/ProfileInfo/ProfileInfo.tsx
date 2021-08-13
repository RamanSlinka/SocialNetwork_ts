import React, {useState} from "react";
import p from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm, {FormDateType} from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: any
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}


export default function ProfileInfo(props: any) {

    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: any) => {
        if (e.current.file.length) {
            props.savePhoto(e.current.file[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)  ;
        })
     }
    return (
        <div>
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={p.avatar}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm
                        initialValues={props.profile}
                        // @ts-ignore
                        profile={props.profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                        profile={props.profile}
                        isOwner={props.isOwner}

                    />}


                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
}


const ProfileData: React.FC<any> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>

            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe ? 'yes' : 'no'}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


const Contact: React.FC<any> = ({contactTitle, contactValue}) => {
    return (
        <div className={p.contact}><b>{contactTitle}</b> : {contactValue}</div>
    )
}