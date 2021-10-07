import React from "react";
import style from '../Common/SCSS/button.module.scss'
import styles from "./users.module.scss";
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
        <div className={styles.user}>
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
                                    className={style.button}
                                    style={{margin: "3px"}}
                                    disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        follow(user.id)
                                    }}>follow</button>
                                : <button
                                    className={style.button}
                                    style={{margin: "3px"}}
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

                    </span>
        </div>)


}

export default User