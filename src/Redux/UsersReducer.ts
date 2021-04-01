


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
type ActionType = FollowACType | UnFollowACType | SetUsersACType

type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

let initialState: initialStateType = {
    users: []
};
export type initialStateType = {
    users: Array<UserType>
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
                return {...state, users: [...state.users, ...action.users]}
            }
            default:
                return state;
        }
    }


export const followAC = (userId: number): FollowACType => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number): UnFollowACType => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>):SetUsersACType => ({type: 'SET_USERS', users} as const)

export default usersReducer;