import React from "react";
import {NavLink} from "react-router-dom";
import h from './../Dialogs.module.css'



export default function DialogItem(props: any) {
    return (
        <div className={h.dialog}>
            <NavLink activeClassName={h.activeDialog} to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    );
}

