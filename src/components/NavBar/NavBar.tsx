import {
    HomeOutlined,
    MessageOutlined,
    SettingOutlined,
    SoundOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavBar.module.scss'


export default function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <div >
                    <HomeOutlined className={style.itemWrapper}/>
                    <NavLink to='/profile' activeClassName={style.active}> Profile </NavLink>
                </div>
            </div>
            <div className={style.item}>
                <div>
                    <MessageOutlined  className={style.itemWrapper}/>
                    <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
                </div>
            </div>
            <div className={style.item}>
                <div >
                    <UserOutlined className={style.itemWrapper}/>
                    <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
                </div>
            </div>
            <div className={style.item}>
                <div >
                    <VideoCameraOutlined className={style.itemWrapper}/>
                    <NavLink to='/video' activeClassName={style.active}>Video</NavLink>
                </div>
            </div>
            <div className={style.item}>
                <div >
                    <SoundOutlined className={style.itemWrapper}/>
                    <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
                </div>
            </div>
            <div className={style.item}>
                <div >
                    <SettingOutlined className={style.itemWrapper}/>
                    <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    );
}