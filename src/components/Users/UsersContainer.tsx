import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";

let mapStateToProps = (state) => {
    return (
        users: state.usersPage.users
    )
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return (
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    )
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);