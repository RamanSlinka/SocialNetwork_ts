import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.scss';
import styleBtn from '../Common/SCSS/button.module.scss';
import logo from './../../assets/images/logo_header.png'


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void

}

export default function Header(props: HeaderPropsType) {
    return <header className={style.header}>
        <img
            src={logo} alt="logo"/>
        <div className={style.loginBlock}>
            {props.isAuth
                ? <div className={style.userName}> {props.login}
                    <button
                        className={styleBtn.button}
                        onClick={props.logout}>Log out
                    </button>
                </div>
                : <div className={style.btnLog}><NavLink to='/login'>Login</NavLink>
                </div>}
        </div>
    </header>;

}
;