import React from "react";
import {NavLink} from "react-router-dom";
import h from './../Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}

export default function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={h.dialog}>
            <NavLink activeClassName={h.activeDialog}
                     to={'/dialogs/' + props.id}
            > {props.name}
            </NavLink>
        </div>
    );
}

