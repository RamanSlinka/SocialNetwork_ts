import React from "react";
import { connect } from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    follow, setCurrentPage, setToggleIsFetching,
    setUsers, setUsersTotalCount,
    unFollow, UserType
} from "../../Redux/UsersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
   // totalUsersCount: number
    currentPage: number
    totalCount: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: number ) => void
    unfollow: (userId: number ) => void
    setUsers: (users:Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

export  type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage. totalCount,
        currentPage: state.usersPage. currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
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
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {



        return ( <>
                {this.props.isFetching ?
                    <Preloader/> : null}

            <Users  totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                //@ts-ignore
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
            />
            </>
        )
    }
}


export default connect (mapStateToProps, mapDispatchToProps
    /*{ follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleIsFetching
    }*/
   ) (UsersAPIComponent);
