import React, {ChangeEvent, useEffect, useState} from 'react'
import styleCommon from '../../Common/SCSS/input.module.scss'
import style from './ProfileInfo.module.scss'

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

        <div className={style.status}>
            {!editMode &&
            <div>
                <b className={style.statusTitle}>Status :</b> <span
                className={style.statusDescription}
                onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    className={styleCommon.input}
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