import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReduser";
import dialogsReducer from "./DialogsReduser";
import usersReducer from "./UsersReducer";






export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store  = createStore(rootReducer);
export default store;