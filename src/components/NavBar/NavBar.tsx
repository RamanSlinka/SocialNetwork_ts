import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss'


export default function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}> Profile </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/video' activeClassName={style.active}>Video</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    );
}