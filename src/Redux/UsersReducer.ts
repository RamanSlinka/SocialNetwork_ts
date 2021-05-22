import {usersAPI} from "../Api/api";


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

type ActionType = FollowACType | UnFollowACType
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
    pageSize: 15,
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
    (state: initialStateType = initialState, action: ActionType): initialStateType => {

        switch (action.type) {
            case 'FOLLOW':
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true};
                        }
                        return u;
                    })
                };
            case 'UNFOLLOW':
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
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

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: any) => {
    return (dispatch: any) => {
        dispatch( setToggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            /*  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                      'API-KEY': '3d0e16a8-fd7d-4f04-a847-cacf5931e58d'
                  }
              })*/
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setToggleFollowingProgress(false, userId));
            })
    }
}

export const unfollow = (userId: any) => {
    return (dispatch: any) => {
        dispatch( setToggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            /*  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                      'API-KEY': '3d0e16a8-fd7d-4f04-a847-cacf5931e58d'
                  }
              })*/
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(setToggleFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;