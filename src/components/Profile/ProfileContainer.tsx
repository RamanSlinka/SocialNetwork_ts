import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from "../../Redux/ProfileReduser";
import {compose} from "redux";


type PathParamsType = {
    userId: string | number | null
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId:  string | number | null
    isAuth: boolean

}

type MapDispatchPropsType = {
    getUserProfile: any
    getStatus: any
    updateStatus: any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         upateStatus={this.props.updateStatus}
                />
            </div>

        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
  //  withAuthRedirect
)(ProfileContainer)