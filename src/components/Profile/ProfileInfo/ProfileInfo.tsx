import React from "react";
import p from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: any
}

export default function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large} className={p.avatar}/>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
}