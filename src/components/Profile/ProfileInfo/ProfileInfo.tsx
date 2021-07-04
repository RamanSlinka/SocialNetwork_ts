import React from "react";
import p from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: any
    isOwner: boolean
    savePhoto: any
}

export default function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.current.file.length) {
            props.savePhoto(e.current.file[0])
        }
    }

    return (
        <div>
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={p.avatar}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
}