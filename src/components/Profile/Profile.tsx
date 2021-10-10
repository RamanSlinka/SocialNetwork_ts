import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/ProfileReduser";
import CarouselPage from "../carousel/CarouselPage";


type ProfilePropsType = {
    status: string
    updateStatus: boolean
    profile: profileType
    isOwner: boolean
    savePhoto: (files: FileList[number]) => string
    saveProfile: any
}

export default function Profile(props: ProfilePropsType) {
    return (
        <div>
            <CarouselPage/>
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