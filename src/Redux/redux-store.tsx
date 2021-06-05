import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReduser";
import dialogsReducer from "./DialogsReduser";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import  thunkMiddleware from "redux-thunk";
/*import { formReducer} from "redux-form"*/
import { reducer as formReducer } from 'redux-form'



export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store  = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;