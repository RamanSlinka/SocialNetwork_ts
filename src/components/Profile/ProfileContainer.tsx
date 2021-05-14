import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {initialStateType, setUserProfile} from "../../Redux/ProfileReduser";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
 profile: any
}

type MapDispatchPropsType = {
    setUserProfile : (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
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

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);