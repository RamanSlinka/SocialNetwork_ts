import React, {ChangeEvent, useState} from "react";
import p from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";
import {ContactType, profileType} from "../../../Redux/ProfileReduser";


type ProfileInfoPropsType = {
    profile: profileType
    status: string
    updateStatus: boolean
    isOwner: boolean
    savePhoto: (files: FileList[number]) => string
    saveProfile: any
}


export default function ProfileInfo(props: ProfileInfoPropsType) {

    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;


        if (files && files.length) {
            debugger
            props.savePhoto(files[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
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

                        //  profile={props.profile}
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


type ProfileDataType = {
    profile: profileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
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
            {/*<div>*/}
            {/*    <b>About me</b>: {profile.aboutMe ? 'yes' : 'no'}*/}
            {/*</div>*/}

            // ?????????????? Profile.aboutMe

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key: any) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

type ContactTypeProps = {
    contactTitle: string
    contactValue: ContactType
}
const Contact: React.FC<ContactTypeProps> = ({contactTitle, contactValue}) => {
    return (
        <div className={p.contact}><b>{contactTitle}</b> : {contactValue}</div>
    )
}