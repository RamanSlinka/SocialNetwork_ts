import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';
import {getUserProfile} from "../../Redux/ProfileReduser";



type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
 profile: any
}

type MapDispatchPropsType = {
    getUserProfile : any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                profile={this.props.profile}
                />
            </div>

        );
    }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);