import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC,  setUsersAC, unFollowAC, UserType} from "../../Redux/UsersReducer";

type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    follow: (userId: number ) => void                //event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    unfollow: (userId: number ) => void
    setUsers: (users:Array<UserType>) => void
}

export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);