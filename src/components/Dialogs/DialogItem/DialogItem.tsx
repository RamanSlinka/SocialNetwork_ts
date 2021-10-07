import React from "react";
import {NavLink} from "react-router-dom";
import style from '../Dialogs.module.scss'

type DialogItemPropsType = {
    name: string
    id: number
}

export default function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.activeDialog}
                     to={'/dialogs/' + props.id}
            > {props.name}
            </NavLink>
        </div>
    );
}

