import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import { NavLink } from "react-router-dom";
import {UserType} from "../../Redux/UsersReducer";


type OnPageChangedType = {
    users: Array<UserType>
    pageSize: number
    // totalUsersCount: number
    currentPage: number
    totalCount: number

    onPageChanged :( page: number) => void
    follow: (userId: number ) => void
    unfollow: (userId: number ) => void

}

let Users = (props: OnPageChangedType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span

                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={(e) => {

                            props.onPageChanged(p)
                        }}
                    > {p} </span>
                })}
            </div>
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
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>follow</button>
                                : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                            <button>follow</button>
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