import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../Redux/ProfileReduser";
import {compose} from "redux";


type PathParamsType = {
    userId: string | number | null
  }

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId: string | number | null
    isAuth: boolean

}

type MapDispatchPropsType = {
    getUserProfile: any
    getStatus: any
    updateStatus: any
    savePhoto: any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         upateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter
    //  withAuthRedirect
)(ProfileContainer)