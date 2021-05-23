import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/AuthReducer";
import {AppStateType} from "../../Redux/redux-store";



type MapStatePropsType = {
    isAuth: boolean
    login:   string | null
}
type MapDispatchPropsType = {
    getAuthUserData: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>

    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
