import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";

let Users = (props: UsersPropsType) => {
    if (props.users.length === 0)  {
         props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qwfALfSsRXjeZBIaaQqcPNWtqommnOesfA&usqp=CAU',
                    followed: false,
                    fullName: 'Kazanova',
                    status: 'Raper',
                    location: {city: 'Hrodna', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qwfALfSsRXjeZBIaaQqcPNWtqommnOesfA&usqp=CAU',
                    followed: true,
                    fullName: 'Diablo',
                    status: 'punk',
                    location: {city: 'London', country: 'UK'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qwfALfSsRXjeZBIaaQqcPNWtqommnOesfA&usqp=CAU',
                    followed: true,
                    fullName: 'Morty',
                    status: 'hipster',
                    location: {city: 'LA', country: 'USA'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="user" className={styles.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;