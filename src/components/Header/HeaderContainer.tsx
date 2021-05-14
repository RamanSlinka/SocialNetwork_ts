import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/AuthReducer";
import {AppStateType} from "../../Redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
    login:   string | null
}
type MapDispatchPropsType = {
    setAuthUserData: (id: number, login:string, email: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, login, email  )
                }
            })
    }

    render() {
        return <Header {...this.props}/>

    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
