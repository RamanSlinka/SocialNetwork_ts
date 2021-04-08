import  axios from "axios";
import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user.png";


class Users extends React.Component {
constructor(props: UsersPropsType) {
    super(props);


        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
}


    render () {
        return (
            <div>

                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src ={u.photos.small  ? u.photos.small : userPhoto}
                                 alt="user" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                   this.props.unfollow(u.id)
                                }}>follow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}
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
}











/*
let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0)  {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })

        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src ={u.photos.small  ? u.photos.small : userPhoto}
                                 alt="user" className={styles.userPhoto}/>
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
}*/


export default Users;