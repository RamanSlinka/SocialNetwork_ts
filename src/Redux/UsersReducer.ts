import {usersAPI} from "../Api/api";
import {AppThunkType} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../Utils/object.helper";


type FollowACType = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
type SetUsersACType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetUsersTotalCountACType = {
    type: 'SET_USERS_TOTAL_COUNT'
    totalCount: number
}
type setToggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

type setToggleIsFollowingProgressACType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}

export type ActionTypeUserReducer = FollowACType | UnFollowACType
    | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType |
    setToggleIsFetchingACType | setToggleIsFollowingProgressACType

type UserLocationType = {
    city: string
    country: string
}


export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    // totalUsersCount: 0,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

};
export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    // totalUsersCount: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

const usersReducer =
    (state: initialStateType = initialState, action: ActionTypeUserReducer): initialStateType => {

        switch (action.type) {
            case 'FOLLOW':
                return {
                    ...state,
                    users: updateObjectInArray(state.users,action.userId,'id',
                        {followed: true})

                };
            case 'UNFOLLOW':
                return {
                    ...state,
                    users: updateObjectInArray(state.users,action.userId,'id',
                        {followed: false})

                }
            case 'SET_USERS': {
                return {...state, users: action.users}
            }
            case 'SET_CURRENT_PAGE': {
                return {...state, currentPage: action.currentPage}
            }
            case 'SET_USERS_TOTAL_COUNT': {
                return {...state, totalCount: action.totalCount}
            }
            case 'TOGGLE_IS_FETCHING': {
                return {...state, isFetching: action.isFetching}
            }
            case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            }
            default:
                return state;
        }
    }


export const followSuccess = (userId: number): FollowACType =>
    ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number): UnFollowACType =>
    ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>): SetUsersACType =>
    ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number): SetCurrentPageACType =>
    ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number): SetUsersTotalCountACType =>
    ({type: 'SET_USERS_TOTAL_COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean): setToggleIsFetchingACType =>
    ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const setToggleFollowingProgress = (isFetching: boolean, userId: number): setToggleIsFollowingProgressACType =>
    ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)


export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}


const followUnfollowFlow = async (dispatch: Dispatch,
                                  userId: number,
                                  apiMethod: any,
                                  actionCreator: any) => {
    dispatch(setToggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleFollowingProgress(false, userId));
}

export const follow = (userId: number): AppThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);

    }
}

export const unfollow = (userId: number): AppThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;