import React from "react";
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


type OnPageChangedType = {
    users: Array<UserType>
    pageSize: number
    // totalUsersCount: number
    currentPage: number
    totalCount: number

    onPageChanged: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    /*setToggleFollowingProgress: (isFetching: boolean, userId: number) => void*/
    followingInProgress: Array<any>

}

let Users = (props: OnPageChangedType) => {
    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       totalCount={props.totalCount}
                       onPageChanged={props.onPageChanged}
            />
            <div>
                {props.users.map(u => <User  user={u}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                             key={u.id}
                                            followingInProgress={props.followingInProgress}
                    />
                )}
            </div>
        </div>
    )
}

export default Users