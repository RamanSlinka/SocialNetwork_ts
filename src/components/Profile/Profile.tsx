import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";



  /*  profilePage: ProfilePageType
    posts: Array<PostsType>
    updateNewPostText: (message: string) => void
    addPost: (message: string) => void
    dispatch: (action: ActionTypes) => void*/


export default function Profile(/*props: PropsType*/) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                /* store={props.store}*/

               /* posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                /!*updateNewPostText={props.updateNewPostText}*!/
                dispatch={props.dispatch}*/
            />
        </div>

    );
}