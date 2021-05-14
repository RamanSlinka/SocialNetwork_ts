

type SetUserDataACType = {
    type: 'SET_USER_DATE'
    data: {
        userId: number
        email: string
        login: string
    }
}


type ActionType = SetUserDataACType


let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

};
export type initialStateType = {
    userId: string |number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

const authReducer =
    (state: initialStateType = initialState, action: ActionType): initialStateType => {

        switch (action.type) {
            case 'SET_USER_DATE':
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }

            default:
                return state;
        }
    }


export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataACType =>
    ({type: 'SET_USER_DATE', data: {userId, email, login}} as const)


export default authReducer;