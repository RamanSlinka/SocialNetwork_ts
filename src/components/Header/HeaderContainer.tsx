import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import { logout} from "../../Redux/AuthReducer";
import {AppStateType} from "../../Redux/redux-store";



type PropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    isAuth: boolean
    login:   string | null
}
type MapDispatchPropsType = {
    logout: any
}




class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props}/>
    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);
