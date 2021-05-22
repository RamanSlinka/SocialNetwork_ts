import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReduser";
import dialogsReducer from "./DialogsReduser";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import  thunkMiddleware from "redux-thunk"





export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store  = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;