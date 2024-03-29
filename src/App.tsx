import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Settings from "./components/Settings/Settings";
import Video from "./components/Video/Video";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Footer from "./components/footer/Footer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))


class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="AppBG">
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={'/profile'}/>}/>

                            <Route path='/dialogs'
                                   render={() => {
                                       return <React.Suspense fallback={<Preloader/>}>
                                           <DialogsContainer/>
                                       </React.Suspense>
                                   }}/>

                            <Route path='/profile/:userId?'
                                   render={() => {
                                       return <React.Suspense fallback={<Preloader/>}>
                                           <ProfileContainer/>
                                       </React.Suspense>

                                   }}/>

                            <Route path='/SocialNetwork_ts/'
                                   render={() => <WelcomePage/>}/>

                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                            <Route path='/login'
                                   render={() => <Login/>}/>


                            <Route path='/video' component={Video}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/sidebar' sidebar={Sidebar}/>
                            {/*<Route path='/*'*/}
                            {/*       render={() => <div>404 PAGE NOT FOUND </div>}/>*/}
                        </Switch>
                    </div>
                    <Footer/>
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

