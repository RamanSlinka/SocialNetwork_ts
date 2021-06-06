import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followSuccess, setCurrentPage, setToggleFollowingProgress,
    unfollowSuccess, UserType, getUsers, follow, unfollow
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";


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
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        /*  this.props.setCurrentPage(pageNumber)
          this.props.toggleIsFetching(true)
        /!*  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
              {
                  withCredentials: true
              }
              )*!/

          usersAPI.getUsers(pageNumber, this.props.pageSize)
              .then(data => {
                  this.props.toggleIsFetching(false)
                  this.props.setUsers(data.items)
              })*/
    }

    render() {


        return (<>
                {this.props.isFetching ?
                    <Preloader/> : null}

                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}

                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unFollow}
                    /*   setToggleFollowingProgress={this.props.setToggleFollowingProgress}*/
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    /*setUsers: (users:Array<UserType>) => void*/
    setCurrentPage: (currentPage: number) => void
    /*  setTotalUsersCount: (totalCount: number) => void
      toggleIsFetching: (isFetching: boolean) => void*/
    setToggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            follow,
            unFollow: unfollow,
            setCurrentPage,
            setToggleFollowingProgress,
            getUsers
        })
)(UsersContainer)