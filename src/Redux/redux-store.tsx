import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReduser";
import dialogsReducer from "./DialogsReduser";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";






export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store  = createStore(rootReducer);
export default store;