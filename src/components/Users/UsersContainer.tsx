import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    setCurrentPage, setToggleFollowingProgress,
    UserType, requestUsers, follow, unfollow
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./usersSelectors";


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    followingInProgress: Array<any>
}


export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


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
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)


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
                       unfollow={this.props.unfollow}
                    /*   setToggleFollowingProgress={this.props.setToggleFollowingProgress}*/
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

/*let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

//use selectors :
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            setToggleFollowingProgress,
            getUsers: requestUsers
        })
)(UsersContainer)