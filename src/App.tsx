import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";




class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                           />}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/sidebar' sidebar={Sidebar}/>
                </div>
            </div>

        );
    }
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapStatePropsType = {
    initialized: boolean
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
    )(App);

