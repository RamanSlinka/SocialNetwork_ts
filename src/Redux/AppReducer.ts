

import { ThunkAction } from "redux-thunk";
import {getAuthUserData} from "./AuthReducer";
import {AppStateType, AppThunkType} from "./redux-store";



type SetUserDataACType = {
    type: 'INITIALIZED_SUCCESS'
    }


export type ActionTypeAppReducer = SetUserDataACType


let initialState: initialStateType = {
    initialized: false
};
export type initialStateType = {
    initialized: boolean

}

const appReducer =
    (state: initialStateType = initialState, action: ActionTypeAppReducer): initialStateType => {

        switch (action.type) {
            case 'INITIALIZED_SUCCESS':
                return {
                    ...state,
                    initialized: true
                }
            default:
                return state;
        }
    }


export const initializedSuccess = (): SetUserDataACType =>
    ({type: 'INITIALIZED_SUCCESS'} as const)



export const initializeApp = (): AppThunkType => (dispatch) => {
  let promise =   dispatch(getAuthUserData());
  Promise.all( [promise])
      .then(()  => {
      dispatch(initializedSuccess())
  })


}



export default appReducer;