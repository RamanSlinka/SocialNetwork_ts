import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UserType
} from "../../Redux/UsersReducer";

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
   // totalUsersCount: number
    currentPage: number
    totalCount: number
}

type mapDispatchToPropsType = {
    follow: (userId: number ) => void                //event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    unfollow: (userId: number ) => void
    setUsers: (users:Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage. totalCount,
        currentPage: state.usersPage. currentPage
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
        },
        setCurrentPage: ( currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
          dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);