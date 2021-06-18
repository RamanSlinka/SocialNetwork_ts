import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: any
}

const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <div>Status:
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                ></input>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks