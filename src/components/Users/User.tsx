import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../Redux/UsersReducer";


type OnPageChangedType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<any>

}

let User: React.FC<OnPageChangedType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto}
                                 alt="user" className={styles.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {!user.followed
                                ? <button
                                    disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        follow(user.id)
                                    }}>follow</button>
                                : <button
                                    disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        unfollow(user.id)
                                    }}
                                >Unfollow</button>}

                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
        </div>)


}

export default User