


type FollowACType = {
    type:'FOLLOW'
    userId: number
}
type UnFollowACType = {
    type:'UNFOLLOW'
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
type ActionType = FollowACType | UnFollowACType
    | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType |
    setToggleIsFetchingACType

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
    isFetching: true

};
export type initialStateType = {
    users: Array<UserType>
    pageSize: number
   // totalUsersCount: number
    totalCount: number
    currentPage: number
    isFetching: boolean
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
                return {...state, users:  action.users}
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
            default:
                return state;
        }
    }


export const followAC = (userId: number): FollowACType =>
    ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number): UnFollowACType =>
    ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>):SetUsersACType =>
    ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC =(currentPage: number):SetCurrentPageACType =>
    ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setUsersTotalCountAC=(totalCount: number):SetUsersTotalCountACType =>
    ({type: 'SET_USERS_TOTAL_COUNT', totalCount} as const)
export const setToggleIsFetchingAC=(isFetching: boolean):setToggleIsFetchingACType =>
    ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)


export default usersReducer;