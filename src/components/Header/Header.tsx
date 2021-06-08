import React from 'react';
import {NavLink} from 'react-router-dom';
import h from './Header.module.css';


export default function Header(props: any) {
    return <header className={h.header}>
        <img
            src="https://previews.123rf.com/images/mackdsgn/mackdsgn1602/mackdsgn160200050/53552462-social-network-logo-template-business-logo-template-vector.jpg"
            alt="logo"/>
        <div className={h.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>;

}
;