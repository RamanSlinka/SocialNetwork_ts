import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";



/*type AppPropsType = {
    store: StoreType
    }*/

  /*  state: RootStateType
    updateNewPostText: (message: string) => void
    addPost: (message: string) => void
    dispatch: (action: ActionTypes) => void
*/



const App/*: React.FC<AppPropsType>*/ = (/*props*/) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                                            /* store={props.store}*/

                                             /*dialogs={props.state.dialogPage.dialogs}
                                              messages={props.state.dialogPage.messages}
                                              dispatch={props.dispatch}
                                              newMessageBody={props.state.dialogPage.newMessageBody}*/
                       />}/>

                <Route path='/profile'
                       render={() => <ProfileContainer

                         /*  store={props.store}
                           profilePage={props.state.profilePage}
                           newPostText={props.state.profilePage.newPostText}
                           updateNewPostText={props.updateNewPostText}
                           dispatch={props.dispatch}*/

                       />}/>

                <Route path='/users'
                       //@ts-ignore
                       render={() => <UsersContainer/> }/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/sidebar' sidebar={Sidebar}/>


            </div>
        </div>

    );
}

export default App;

