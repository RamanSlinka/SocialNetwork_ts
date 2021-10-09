import React, {ChangeEvent, useState} from "react";
import styleCommon from '../../Common/SCSS/button.module.scss';
import styles from '../../Common/FormsControls/FormsControls.module.scss';
import style from "../Profile.module.scss";
import styleInfo from './ProfileInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm, {FormDateType} from "./ProfileDataForm";
import {ContactType, profileType} from "../../../Redux/ProfileReduser";


type ProfileInfoPropsType = {
    profile: profileType
    status: string
    updateStatus: boolean
    isOwner: boolean
    savePhoto: (files: FileList[number]) => string
    saveProfile: (formData: FormDateType) => any
}


export default function ProfileInfo(props: ProfileInfoPropsType) {

    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length) {
            props.savePhoto(files[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }



    return (
        <div className={style.descriptionBlock}>


            <div className={style.avatarContainer}>
                <img src={props.profile.photos.large || userPhoto}
                     className={style.avatar}/>
                {
                    props.isOwner && <input
                        className={style.inputFile}
                        type={'file'}
                        onChange={onMainPhotoSelected}
                    />}
            </div>

            <div className={style.infoBlock}>
                <div className={styleInfo.headerProfile}>
                <span className={styleInfo.fullName}>
                {props.profile.fullName}
                </span>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
                <hr style={{border: " 1px solid gold "}}/>

                <div className={style.detailedInfo}>
                    <h3 className={style.titleDetailedInfo} >
                        Detailed information</h3>
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
                </div>
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

            <div className={styles.titlesForm}>
                <p>Full name</p>: {profile.fullName}
            </div>

            <div className={styles.titlesForm}>
                <p>Looking for a job</p>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div className={styles.titlesForm}>
                <p>My professional skills</p>: {profile.lookingForAJobDescription}
            </div>
            }

            <div className={styles.titlesForm}>
                <p>About me</p>: {profile ? 'yes' : 'no'}
            </div>


            <div>
                <p>Contacts :</p> {Object.keys(profile.contacts).map((key: any) => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                />
            })}
            </div>

            {isOwner && <div>
                <button
                    className={styleCommon.button}
                    onClick={goToEditMode}
                >Edit
                </button>
            </div>}
        </div>
    )
}

type ContactTypeProps = {
    contactTitle: string
    contactValue: ContactType
}
const Contact: React.FC<ContactTypeProps> = ({contactTitle, contactValue}) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}