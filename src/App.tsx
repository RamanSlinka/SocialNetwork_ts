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




const App/*: React.FC<AppPropsType>*/ = (/*props*/) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                         />}/>

                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer
                       />}/>

                <Route path='/users'

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

