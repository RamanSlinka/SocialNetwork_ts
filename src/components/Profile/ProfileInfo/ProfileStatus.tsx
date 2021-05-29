import React from 'react'

class ProfileStatus extends React.Component<any> {
    render() {
        state = {
            editMode: false
        }

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input>{this.props.status}</input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus