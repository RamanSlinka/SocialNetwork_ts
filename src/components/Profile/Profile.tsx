import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/ProfileReduser";


type ProfilePropsType = {
    status: string
    updateStatus: boolean
    profile: profileType
    isOwner: boolean
    savePhoto: (e: any) => string
    saveProfile: () => void
}

export default function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer
            />
        </div>

    );
}