import React from "react";
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.scss"


type OnPageChangedType = {
    pageSize: number
    currentPage: number
    totalItemsCount: number
   // portionSize: number
    onPageChanged: (page: number) => void

    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<any>
    users: Array<UserType>
}

let Users = (props: OnPageChangedType) => {
    return (
        <div className={styles.userWrapper}>
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                     //  portionSize={props.portionSize}
                       totalItemsCount={props.totalItemsCount}

            />
            <div>
                {props.users.map(u => <User user={u}
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