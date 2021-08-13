import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


/*  profilePage: ProfilePageType
  posts: Array<PostsType>
  updateNewPostText: (message: string) => void
  addPost: (message: string) => void
  dispatch: (action: ActionTypes) => void*/

type ProfilePropsType = {
    status: string
    updateStatus: any
    profile: any
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

export default function Profile(props: any) {
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