import {authAPI, securityAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";


type SetUserDataACType = {
    type: 'network/auth/SET_USER_DATE'
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}
type getCaptchaUrlACType = {
    type: 'network/auth/GET_CAPTCHA_URL_SUCCESS'
    payload: {
        captchaUrl: string | null
    }
}


export type ActionTypeAuthReducer = SetUserDataACType | getCaptchaUrlACType


let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};
export type initialStateType = {
    userId:  number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}

const authReducer =
    (state: initialStateType = initialState, action: ActionTypeAuthReducer): initialStateType => {

        switch (action.type) {
            case 'network/auth/SET_USER_DATE':
            case "network/auth/GET_CAPTCHA_URL_SUCCESS":
                return {
                    ...state,
                    ...action.payload
                }


            default:
                return state;
        }
    }


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType =>
    ({type: 'network/auth/SET_USER_DATE', payload: {userId, email, login, isAuth}} as const)

export const getCaptchaUrlAC = (captchaUrl: string | null): getCaptchaUrlACType =>
    ({type: 'network/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, remember: boolean, captcha: null | string): AppThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, remember, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.data.url;
    dispatch(getCaptchaUrlAC(captchaUrl))
}

export const logout = (): AppThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;