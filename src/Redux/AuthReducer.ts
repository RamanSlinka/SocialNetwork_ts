import {authAPI} from "../Api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


type SetUserDataACType = {
    type: 'SET_USER_DATE'
    payload: {
        userId:  number  | null
        email: string | null
        login: string | null
        isAuth: boolean
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
    userId: string | number | null
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
                    ...action.payload
                }
            default:
                return state;
        }
    }


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType =>
    ({type: 'SET_USER_DATE', payload: {userId, email, login, isAuth}} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true ));
            }
        })
}

export const login = (email: string, password: string, remember: boolean) => (dispatch: any) => {



    authAPI.login(email, password, remember)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
                 } else  {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false ));
            }
        })
}

export default authReducer;