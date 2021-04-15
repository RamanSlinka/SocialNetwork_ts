import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReduser";



class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>

        );
    }
}

let mapStateToProps = () => ({

})
export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);