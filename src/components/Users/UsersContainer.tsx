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
    totalItemsCount: number
    isFetching: boolean
    followingInProgress: Array<any>
}


export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType



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

                <Users totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                      // portionSize={portionSize}

                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
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



//use selectors :
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
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