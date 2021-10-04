import React from 'react';
import {NavLink} from 'react-router-dom';
import h from './Header.module.css';
import logo from './../../assets/images/logo_header.png'


export default function Header(props: any) {
    return <header className={h.header}>
        <img
            src={logo} alt="logo"/>
        <div className={h.loginBlock}>
            {props.isAuth
                ? <div className={h.userName}> {props.login}
                    <button
                        className={h.btnLog}
                        onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>;

}
;