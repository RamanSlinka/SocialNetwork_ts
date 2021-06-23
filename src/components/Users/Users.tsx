import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../Common/Paginator/Paginator";


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



//  нашёл функцию для пагинации ! как применить ?
    /* function pagination(b:number, c: number, d: number) {
         return Array(d + 1).join("1").split("").map(function (a, b) {
             return b + 1
         }).filter(function (a, e) {
             return c ? 1 === a || a === b || a === d || a <= b + c && a >= b - c : !0
         })
     };*/


    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       totalCount={props.totalCount}
                       onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 alt="user" className={styles.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {!u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>follow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >Unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users