import React from "react";
import { connect } from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    follow, setCurrentPage, setToggleFollowingProgress, setToggleIsFetching,
    setUsers, setUsersTotalCount,
    unFollow, UserType
} from "../../Redux/UsersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../Api/api";




type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
   // totalUsersCount: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    followingInProgress: Array<any>
}



export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage. totalCount,
        currentPage: state.usersPage. currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollow(userId))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: ( currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
          dispatch(setUsersTotalCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetching(isFetching))
        }
    }
}*/

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)

        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
             withCredentials: true
            }  )*/
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
      /*  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }
            )*/

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    render() {



        return ( <>
                {this.props.isFetching ?
                    <Preloader/> : null}

            <Users  totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    setToggleFollowingProgress={this.props.setToggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
            />
            </>
        )
    }
}


type mapDispatchToPropsType = {
    follow: (userId: number ) => void
    unFollow: (userId: number ) => void
    setUsers: (users:Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setToggleFollowingProgress: (isFetching: boolean, userId: number) => void

}
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount: setUsersTotalCount,
        toggleIsFetching: setToggleIsFetching,
        setToggleFollowingProgress,
    }
   ) (UsersAPIComponent);
