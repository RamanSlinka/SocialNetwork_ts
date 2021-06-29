import React from 'react'

export type ProfileStatusPropsType = {
    status: string
    updateStatus: any
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: any) => {
        this.setState ({
        state: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>Status:
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.state.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus