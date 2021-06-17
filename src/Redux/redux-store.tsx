import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ActionTypeProfileReducer} from "./ProfileReduser";
import dialogsReducer, {ActionTypeDialogReducer} from "./DialogsReduser";
import usersReducer, {ActionTypeUserReducer} from "./UsersReducer";
import authReducer, {ActionTypeAuthReducer} from "./AuthReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer, {ActionTypeAppReducer} from "./AppReducer";



export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

 type AllActionsType = ActionTypeAuthReducer
    | ActionTypeAppReducer | ActionTypeDialogReducer
    |ActionTypeProfileReducer | ActionTypeUserReducer


export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AllActionsType
    >

let store  = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;